import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from './services/polls.service';

@Component( {
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: [ './polls.component.css' ]
} )
export class PollsComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
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
    this.connection = this._pollsService.getMessages().subscribe( message => {
      console.log( 'Mensaje recibido por Angular', message );
      this.messages.push( message );
    } );
  }

  sendMessage() {
    this._pollsService.sendMessage( this.message );
    this.message = '';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


}

