import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../../config/app.config';

console.log( io );

@Injectable()
export class PollsService {

  socket;

  constructor() { }

  sendMessage( message: string ) {
    console.log( 'Sending message: ', message );
    this.socket.emit( 'new-message', message );
  }

  getMessages(): Observable<any> {
    const observable = new Observable( observer => {
      this.socket = io( AppConfig.REAL_TIME_SERVER_URL );

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
