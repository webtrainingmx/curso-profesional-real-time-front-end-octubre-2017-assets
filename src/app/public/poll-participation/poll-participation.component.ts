import { Component, OnDestroy, OnInit } from '@angular/core';
import { Poll } from '../../auth/polls/models/poll.model';
import { VotesService } from '../../auth/polls/services/votes.service';
import { PollsService } from '../../auth/polls/services/polls.service';
import { ChartsConfig } from '../../config/charts.config';

@Component( {
  selector: 'app-poll-participation',
  templateUrl: './poll-participation.component.html',
  styleUrls: [ './poll-participation.component.css' ]
} )
export class PollParticipationComponent implements OnInit, OnDestroy {

  poll: Poll;
  dataForChart = {
    labels: [],
    datasets: []
  };
  dataForChartOptions = ChartsConfig.CHART_OPTIONS;
  connectionToRealTimeService;

  userAnswer: any;

  constructor( private _voteService: VotesService, private _pollsService: PollsService ) {
    this.connectionToRealTimeService = this._voteService.getRealTimeVotes().subscribe( data => {
      console.log( 'Encuesta recibido por Angular desde socket.io', data.poll );
      this.poll = data.poll;
      this.dataForChart = this.createDataForChart( this.poll );
    } );
  }

  createDataForChart( poll ) {
    // Count the votes
    const data = [];

    poll.answers.forEach( answer => {
      const counterPerAnswer = poll.votes.filter( vote => vote.answer_id === answer.id ).length;
      data.push( counterPerAnswer );
    } );


    // Modify options for chart.js
    // this.dataForChartOptions.title.text = poll.question.label;
    console.log( data );

    return {
      labels: poll.answers.map( answer => answer.label ),
      datasets: [ {
        label: poll.question.label,
        // backgroundColor: '#42A5F5',
        // borderColor: '#1E88E5',
        backgroundColor: ChartsConfig.BG_COLORS,
        borderWidth: ChartsConfig.BORDER_WIDTH,
        borderColor: ChartsConfig.BORDER_COLORS,
        data: data,
      } ]
    };
  }

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

  ngOnDestroy() {
    // this.connectionToRealTimeService.unsubscribe();
  }

}
