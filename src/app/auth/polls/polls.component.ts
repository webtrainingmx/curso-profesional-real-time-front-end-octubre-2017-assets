import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from './services/polls.service';
import { Poll } from './models/poll.model';

@Component( {
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: [ './polls.component.css' ]
} )
export class PollsComponent {

  constructor() { }

  ngOnInit() {
  }

}

