import { Component, Input, OnInit } from '@angular/core';
import { PollsService } from '../polls/services/polls.service';


@Component( {
  selector: 'app-polls-reports',
  templateUrl: './polls-reports.component.html',
  styleUrls: [ './polls-reports.component.css' ]
} )
export class PollsReportsComponent implements OnInit {

  @Input()
  data: any;

  constructor( private _pollsService: PollsService ) {
    // this.data = {
    //   labels: [ 'Angular', 'React', 'Vue', 'Ember.js' ],
    //   datasets: [
    //     {
    //       label: 'What is your favorite framework?',
    //       backgroundColor: '#42A5F5',
    //       borderColor: '#1E88E5',
    //       data: [ 65, 59, 80, 81 ]
    //     }
    //   ]
    // };
  }


  ngOnInit() {
  }

}
