var path = require("path");
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");
var mysql = require("mysql");
var env = require('node-env-file');
env('./.env');
var dbcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "raspy_db"
});

dbcon.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database.");
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use((req, res, next) => { // required if serving frontend on different port
    res.header('Access-Control-Allow-Origin', '*'/*, 'http://localhost:' + process.env.FRONTEND_PORT*/);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, GET, POST');
    next();
});
app.use(express.static(path.join(__dirname, "raspy")));

app.post("/api/register", function(req, res) {
    console.log("Received registration details!");

    if (req.body.username && req.body.password)
    {
        var username = req.body.username;
        var password = req.body.password;

        dbcon.query("SELECT * FROM users WHERE username = ?", [username], function (err, results) {
            if (results.length > 0) {
                console.log("User attempted to register with existing username.")
                res.json({ valid: false, message: "Username already exists!"});
            } else {
                dbcon.query("INSERT INTO users (username, password) VALUES (?, MD5(?))", [username, password], function (err, results) {
                    if (err) throw err;
                    console.log("Registered new user successfully!");
                    res.json({ valid: true, message: "Registered new user successfully!"});
                });
            }
        });
    } else {
        console.log("Registration details have bad form; denying request.");
    }
});

var typingList = [];
var bracket_users = {};

io.on('connection', function(socket) {
    console.log('Received user connection');
    var user_id = socket.handshake.query.user_id;
    dbcon.query("SELECT * FROM users WHERE id = ? ", [user_id], function (err, results) {
        if (results.length > 0) {
            bracket_users[user_id] = results[0].username;
            let connectionStatus = {
                connected: true,
                user: bracket_users[user_id],
                userList: bracket_users
            }
            io.emit('user connection', connectionStatus);
        }
    });

    socket.on('disconnect', function() {
        var dcuser = bracket_users[user_id];
        console.log(dcuser + ' disconnected');
        bracket_users[user_id] = undefined;
        let connectionStatus = {
            connected: false,
            user: dcuser,
            userList: bracket_users
        };
        io.emit('user connection', connectionStatus);
    });

    socket.on('user typing',function(user_data) {
        if (user_data.isTyping) {
            if (typingList.indexOf(bracket_users[user_id]) == -1) {
                typingList.push(bracket_users[user_id]);
            }
        } else {
            var i = typingList.indexOf(bracket_users[user_id]);
            typingList.splice(i, 1);
        }
        io.emit('user typing', typingList);
    });

    socket.on('chat message', (message) => {
        dbcon.query("INSERT INTO messages (user_id, username, timestamp, content, bracket_id) VALUES (?, ?, FROM_UNIXTIME(? / 1000), ?, ?)", 
            [message.user_id, bracket_users[user_id], message.timestamp, message.content, message.bracket_id], function (err, results) {
                message_client = {
                    user_id: message.user_id,
                    username: bracket_users[user_id], 
                    timestamp: message.timestamp, 
                    content: message.content, 
                    bracket_id: message.bracket_id
                }
            io.emit('chat message', message_client);
        });
    });
});

//-------API ----------

// LOGIN

app.post("/api/login", function(req, res) {

    var user_token = {
        user_id: null,
        valid: false,
        exists: false,
        expires: null
    };

    dbcon.query("SELECT * FROM users WHERE username = ?", [req.body.username], function (err, results) {
        if (results.length > 0) {
        
            dbcon.query("SELECT * FROM users WHERE username = ? AND password = MD5(?)", [req.body.username, req.body.password], function (err, results) {
                if (results.length > 0) {
                    console.log('User "' + req.body.username + '" logged in successfully.');
                    var expires = new Date();
                    user_token.user_id = results[0].id;
                    user_token.valid = true;
                    user_token.exists = true;
                    user_token.expires = expires.getTime() + 2592000000; // expire in 30 days
                    res.json(user_token);
                } else {
                    console.log('User attempted login with username: "' + req.body.username + '" unsuccessfully at ' + Date().toString());
                    user_token.user_id = -1;
                    user_token.valid = false;
                    user_token.exists = true;
                    user_token.expires = -1;
                    res.json(user_token);
                }
            });
        } else {
            user_token.user_id = -2;
            user_token.valid = false;
            user_token.exists = false;
            user_token.expires = -1;
            res.json(user_token);
        }
    });
});

// BRACKETS

app.get("/api/brackets", function(req, res) {
    dbcon.query("SELECT * FROM brackets", function (err, results) {
        res.json(results);
    });
});

app.get("/api/brackets/:id", function(req, res) {
    var bracket, messages = [];
    dbcon.query("SELECT * FROM brackets WHERE id = ?", [req.params.id], function (err, results) {
        bracket = results[0];
        dbcon.query("SELECT * FROM messages WHERE bracket_id = ?", [req.params.id], function (err, results) {
            messages = results;

            var bracketdata = {
                detail: bracket,
                messages: messages
            };

            res.json(bracketdata);
        });
    });
});

// --------------------

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/raspy/index.html");
});

server.listen(process.env.BACKEND_PORT, function() {
    console.log('Listening on localhost:' + process.env.BACKEND_PORT);
});