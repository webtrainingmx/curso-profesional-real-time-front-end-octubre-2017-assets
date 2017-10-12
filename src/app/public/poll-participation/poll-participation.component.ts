import { Component, OnInit } from '@angular/core';
import { Poll } from '../../auth/polls/models/poll.model';
import { VotesService } from '../../auth/polls/services/votes.service';

@Component( {
  selector: 'app-poll-participation',
  templateUrl: './poll-participation.component.html',
  styleUrls: [ './poll-participation.component.css' ]
} )
export class PollParticipationComponent implements OnInit {

  poll: Poll = {
    'id': 1,
    'question': {
      'id': 1,
      'poll_id': 1,
      'label': 'What is your favorite framework?'
    },
    'answers': [
      {
        'id': 1,
        'question_id': 1,
        'poll_id': 1,
        'label': 'Angular'
      },
      {
        'id': 2,
        'poll_id': 1,
        'question_id': 1,
        'label': 'React'
      },
      {
        'id': 3,
        'poll_id': 1,
        'question_id': 1,
        'label': 'Vue'
      },
      {
        'id': 4,
        'poll_id': 1,
        'question_id': 1,
        'label': 'Ember.js'
      }
    ],
    'votes': [
      {
        'id': 1,
        'user_id': 1,
        'answer_id': 1,
        'poll_id': 1
      } ]
  };


  userAnswer: any;

  constructor( private _voteService: VotesService ) { }

  ngOnInit() {

  }

  onClickSendVote( event: Event ) {
    event.preventDefault();
    this._voteService.sendVote( this.userAnswer );
    console.log( 'Click to send', this.userAnswer );

  }

}
