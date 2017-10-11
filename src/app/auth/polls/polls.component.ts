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

