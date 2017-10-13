import { Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PublicGuard } from './common/guards/public.guard';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  /*{
    path: 'home', component: , data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos', component: ,
    data: { name: 'Proyectos' }, canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ,  pathMatch: 'full' },
      { path: 'detalle/:id', component:  },
    ]
  },*/
  {
    path: '**', component: NotFoundComponent
  }
];
