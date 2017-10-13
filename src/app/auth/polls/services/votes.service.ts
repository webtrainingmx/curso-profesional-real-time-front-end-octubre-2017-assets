import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Answer } from '../models/answer.model';
import { AppConfig } from '../../../config/app.config';

// console.log( io );

@Injectable()
export class VotesService {
  socket;

  constructor() {
    this.socket = io( AppConfig.REAL_TIME_SERVER_URL );
  }

  sendVote( answer: Answer ) {
    console.log( 'Sending vote: ', answer );

    this.socket.emit( 'new-vote', answer );
  }

  getRealTimeVotes(): Observable<any> {
    const observable = new Observable( observer => {
      this.socket = io( AppConfig.REAL_TIME_SERVER_URL );

      this.socket.on( 'vote-received', ( data ) => {
        observer.next( data );
      } );

      return () => {
        this.socket.disconnect();
      };
    } );

    return observable;
  }

  // TODO: Destroy the socket

}
