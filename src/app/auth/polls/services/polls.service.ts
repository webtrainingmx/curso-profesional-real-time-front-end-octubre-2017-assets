import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

console.log( io );

@Injectable()
export class PollsService {

  url = 'http://localhost:3300';
  socket;

  constructor() { }

  sendMessage( message: string ) {
    console.log( 'Sending message: ', message );
    this.socket.emit( 'new-message', message );
  }

  sendVote( vote ) {
    console.log( 'Sending vote', vote );
  }

  getMessages(): Observable<any> {
    const observable = new Observable( observer => {
      this.socket = io( this.url );

      this.socket.on( 'message-received', ( data ) => {
        observer.next( data );
      } );

      return () => {
        this.socket.disconnect();
      };
    } );

    return observable;
  }

}
