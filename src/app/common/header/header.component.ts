import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public _authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
    this.router.navigate(['/login']);
  }
}
