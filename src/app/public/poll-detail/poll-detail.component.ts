import {Component, OnDestroy, OnInit} from '@angular/core';
import {Poll} from '../../auth/polls/models/poll.model';
import {VotesService} from '../../auth/polls/services/votes.service';
import {PollsService} from '../../auth/polls/services/polls.service';
import {ChartsConfig} from '../../config/charts.config';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poll-participation',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit, OnDestroy {

  poll: Poll;
  dataForChart = {
    labels: [],
    datasets: []
  };
  dataForChartOptions = ChartsConfig.CHART_OPTIONS;
  connectionToRealTimeService;

  userAnswer: any;

  constructor(public _activatedRoute: ActivatedRoute, private _voteService: VotesService, private _pollsService: PollsService) {
    this.connectionToRealTimeService = this._voteService.getRealTimeVotes().subscribe(data => {
      console.log('Encuesta recibido por Angular desde socket.io', data.poll);
      this.poll = data.poll;
      this.dataForChart = this.createDataForChart(this.poll);
    });
  }

  createDataForChart(poll) {
    // Count the votes
    const dataCounters = [];

    poll.answers.forEach(answer => {
      const counterPerAnswer = poll.votes.filter(vote => vote.answer_id === answer.id).length;
      dataCounters.push(counterPerAnswer);
    });


    // Modify options for chart.js
    // this.dataForChartOptions.title.text = poll.question.label;
    console.log(dataCounters);

    return {
      labels: poll.answers.map(answer => answer.label),
      datasets: [{
        label: poll.question.label,
        // backgroundColor: '#42A5F5',
        // borderColor: '#1E88E5',
        backgroundColor: ChartsConfig.BG_COLORS,
        borderWidth: ChartsConfig.BORDER_WIDTH,
        borderColor: ChartsConfig.BORDER_COLORS,
        data: dataCounters,
      }]
    };
  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      const pollID: number = params['id'];
      this._pollsService.getPollById(pollID).subscribe(
        (data) => {
          this.poll = data;
          this.dataForChart = this.createDataForChart(this.poll);
        },
        error => {
          console.log(error);
        });
    });
  }

  onClickSendVote(event: Event) {
    event.preventDefault();
    this._voteService.sendVote(this.userAnswer);
    console.log('Click to send', this.userAnswer);


  }

  ngOnDestroy() {
    this.connectionToRealTimeService.unsubscribe();
  }

}
