import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from './services/polls.service';
import { Poll } from './models/poll.model';

@Component( {
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: [ './polls.component.css' ]
} )
export class PollsComponent implements OnInit, OnDestroy {
  polls: Array<Poll> = [];
  messages = [];
  connectionToRealTimeService;
  message;
  data = {
    'name': 'John',
    'age': 30,
    'cars': [
      { 'name': 'Ford', 'models': [ 'Fiesta', 'Focus', 'Mustang' ] },
      { 'name': 'BMW', 'models': [ '320', 'X3', 'X5' ] },
      { 'name': 'Fiat', 'models': [ '500', 'Panda' ] }
    ]
  };

  constructor( private _pollsService: PollsService ) { }

  ngOnInit() {
    this.connectionToRealTimeService = this._pollsService.getRealTimeMessages().subscribe( message => {
      console.log( 'Mensaje recibido por Angular', message );
      this.messages.push( message );
    } );


    // Get all polls without real time
    this._pollsService.getPolls().subscribe( ( data ) => {
      this.polls = data;
      console.log(this.polls);
    }, err => {
      console.log( err );
    } );

  }

  sendMessage() {
    this._pollsService.sendMessage( this.message );
    this.message = '';
  }

  ngOnDestroy() {
    this.connectionToRealTimeService.unsubscribe();
  }


}

