import { Component, OnInit } from '@angular/core';
import { Poll } from '../../auth/polls/models/poll.model';
import { VotesService } from '../../auth/polls/services/votes.service';
import { PollsService } from '../../auth/polls/services/polls.service';

@Component( {
  selector: 'app-poll-participation',
  templateUrl: './poll-participation.component.html',
  styleUrls: [ './poll-participation.component.css' ]
} )
export class PollParticipationComponent implements OnInit {

  poll: Poll;


  userAnswer: any;

  constructor( private _voteService: VotesService, private _pollsService: PollsService ) { }

  ngOnInit() {

    // TODO: Change this to be a dynamic parameter
    const pollID = 1;
    this._pollsService.getPollById( pollID ).subscribe(
      ( data ) => {
        this.poll = data;
      },
      error => {
        console.log( error );
      } );

  }

  onClickSendVote( event: Event ) {
    event.preventDefault();
    this._voteService.sendVote( this.userAnswer );
    console.log( 'Click to send', this.userAnswer );

  }

}
