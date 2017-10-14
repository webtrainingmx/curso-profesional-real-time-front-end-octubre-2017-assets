import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PollsComponent } from './auth/polls/polls.component';

import { PollDetailComponent } from './public/poll-detail/poll-detail.component';
import { Ng2Webstorage } from 'ngx-webstorage';

import { IterateObjectPipe } from './common/iterate-object.pipe';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './public/login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HttpService } from './auth/common-services/http.service';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { AuthenticationService } from './common/services/authentication.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { PollsHomeComponent } from './public/polls-home/polls-home.component';
import { PollsService } from './auth/polls/services/polls.service';

@NgModule( {
  declarations: [
    AppComponent,
    PollsComponent,
    PollDetailComponent,
    IterateObjectPipe,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    PollsHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot( routes ),
    Ng2Webstorage
  ],
  providers: [ PollsService, HttpService, PublicGuard, AuthGuard, AuthenticationService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
