import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PollsComponent } from './auth/polls/polls.component';
import { PollsService } from './auth/polls/services/polls.service';
import { AnswersService } from './auth/polls/services/answers.service';
import { QuestionsService } from './auth/polls/services/questions.service';
import { VotesService } from './auth/polls/services/votes.service';
import { PollsReportsComponent } from './auth/admin/polls-reports/polls-reports.component';
import { ChartModule } from 'primeng/primeng';
import { PollParticipationComponent } from './public/poll-participation/poll-participation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';

@NgModule( {
  declarations: [
    AppComponent,
    PollsComponent,
    PollsReportsComponent,
    PollParticipationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [ PollsService, AnswersService, QuestionsService, VotesService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
