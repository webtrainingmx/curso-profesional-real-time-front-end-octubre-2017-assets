import { Component, OnInit } from '@angular/core';
import { Poll } from '../../auth/polls/models/poll.model';

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
        'label': 'Angular'
      },
      {
        'id': 2,
        'question_id': 1,
        'label': 'React'
      },
      {
        'id': 3,
        'question_id': 1,
        'label': 'Vue'
      },
      {
        'id': 3,
        'question_id': 1,
        'label': 'Vue'
      }
    ],
    'votes': [
      {
        'id': 1,
        'user_id': 1,
        'answer_id': 1,
        'question_id': 1,
        'poll_id': 1
      },
      {
        'id': 2,
        'user_id': 2,
        'answer_id': 2,
        'question_id': 1,
        'poll_id': 1
      },
      {
        'id': 3,
        'user_id': 3,
        'answer_id': 2,
        'question_id': 1,
        'poll_id': 1
      }
    ]
  };

  userAnswer: any;

  constructor() { }

  ngOnInit() {

  }

}
