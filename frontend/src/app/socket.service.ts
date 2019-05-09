import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { apiLocation } from './globals';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  // connection
  private socket;

  constructor() {
    let user_id = JSON.parse(localStorage.getItem("token")).user_id;
    this.socket = io(apiLocation, {query: 'user_id=' + user_id});
    this.socket.emit('user connected', );
  }

  // Messaging
  sendMessage(messageData: any) {
    this.socket.emit('chat message', messageData);
  }

  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('chat message', message => {
        observer.next(message);
      });
    });
  }

  // Typing
  userTyping(userTypingData: any) {
    this.socket.emit('user typing', userTypingData);
  }

  onUserTyping() {
    return Observable.create(observer => {
      this.socket.on('user typing', typing => {
        observer.next(typing);
      });
    });
  }

  // Connection
/*  userConnection(userConnectionData: any) {
    this.socket.emit('user connection', userConnectionData);
  }*/

  onUserConnection() {
    return Observable.create(observer => {
      this.socket.on('user connection', connectionStatus => {
        observer.next(connectionStatus);
      });
    });
  }
}