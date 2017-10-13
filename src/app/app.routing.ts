import { Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PublicGuard } from './common/guards/public.guard';
import {PollsComponent} from './auth/polls/polls.component';
import {PollsDetailsComponent} from "./auth/polls-details/polls-details.component";

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  {
    path: 'home', component: PollsComponent, data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'encuestas', component: PollsComponent,
    data: { name: 'Encuestas' }, canActivate: [ AuthGuard ],
    children: [
      { path: '', component: PollsComponent ,  pathMatch: 'full' },
      { path: 'detalle/:id', component: PollsDetailsComponent  },
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];
