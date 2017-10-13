import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PollsComponent } from './auth/polls/polls.component';
import { PollsService } from './auth/polls/services/polls.service';
import { AnswersService } from './auth/polls/services/answers.service';
import { QuestionsService } from './auth/polls/services/questions.service';
import { VotesService } from './auth/polls/services/votes.service';
import { PollsDetailsComponent } from './auth/polls-details/polls-details.component';
import { ChartModule } from 'primeng/primeng';
import { PollParticipationComponent } from './public/poll-participation/poll-participation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';
import {Ng2Webstorage} from 'ngx-webstorage';

import { IterateObjectPipe } from './common/iterate-object.pipe';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './public/login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import {HttpService} from './auth/common-services/http.service';
import {PublicGuard} from './common/guards/public.guard';
import {AuthGuard} from './common/guards/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';

@NgModule( {
  declarations: [
    AppComponent,
    PollsComponent,
    PollsDetailsComponent,
    PollParticipationComponent,
    IterateObjectPipe,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule.forRoot(routes),
    Ng2Webstorage
  ],
  providers: [ PollsService, AnswersService, QuestionsService, VotesService, HttpService, PublicGuard, AuthGuard, AuthenticationService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
