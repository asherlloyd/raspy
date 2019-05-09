import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-bracket-detail',
  templateUrl: './bracket-detail.component.html',
  styleUrls: ['./bracket-detail.component.scss']
})
export class BracketDetailComponent implements OnInit {

  bracket: any;
  messages: any = [];
  userList: any = [];
  menuOpened: boolean;
  userId: any;

  typingMessage: string;
  typingTimeout: any;
  typeDelay: number = 1000;

  constructor(public rest: RestService,
    private route: ActivatedRoute,
    private socket: SocketService) {}

  ngOnInit() {
    this.rest.getBracket(this.route.snapshot.params['id']).subscribe((bracket: {detail, messages: []}) => {
      this.bracket = bracket;
      this.messages = bracket.messages;
    });

    this.userId = JSON.parse(localStorage.getItem("token")).user_id;
    this.userList = [];

    this.socket.onUserConnection().subscribe(connectionStatus => {
      let connectionString = " connected.";
      if (!connectionStatus.connected) {
        connectionString = " disconnected.";
      }

      this.userList = Object.values(connectionStatus.userList);

      this.messages.push({
        type: "serverMessage",
        username: "",
        timestamp: Date.now(), 
        content: connectionStatus.user + connectionString, 
        bracket_id: -1
      });
    });

    this.socket.onNewMessage().subscribe(message => {
      this.messages.push(message);
    });

    this.socket.onUserTyping().subscribe(userTypingList => {
      this.typingMessage = "";
      if (userTypingList.length == 1) {
        this.typingMessage = userTypingList[0] + " is typing";
      } else if (userTypingList.length > 1) {
        this.typingMessage = userTypingList.join(', ').replace(/,(?!.*,)/gmi, ' and') + " are typing";
      }
    });
  }

  onUserTyping(userId: number, isTyping: boolean) {
    let userTypingData = {
        user_id: userId,
        isTyping: isTyping
    };
    this.socket.userTyping(userTypingData);
  }

  onMessageKeyUp(event) {
    if (event.keyCode != 13) { // Enter
      clearTimeout(this.typingTimeout);
      this.typingTimeout = setTimeout(_ => {
        this.onUserTyping(this.userId, false);
      }, this.typeDelay);
    } else {
      clearTimeout(this.typingTimeout);
      this.onUserTyping(this.userId, false);
    }
  }

  onMessageKeyDown(event) {
    if (event.keyCode != 13) { // Enter
      clearTimeout(this.typingTimeout);
      this.onUserTyping(this.userId, true);
    }
  }

  onSendMessage(f: NgForm) {
    if (f.value.message) {
      if (f.value.message.replace(/^\s+|\s+$/g, '')) {
        let messageData = {
          user_id: this.userId,
          bracket_id: this.bracket.detail.id,
          timestamp: Date.now(),
          content: f.value.message
        }
        f.resetForm();
        this.socket.sendMessage(messageData);
        this.onUserTyping(this.userId, false);
      }
    }
  }

  openMenu() {
    if (!this.menuOpened) {
      this.menuOpened = true;
    } else {
      this.menuOpened = false;
    }
  }

}
