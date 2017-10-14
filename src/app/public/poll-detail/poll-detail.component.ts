import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-poll-participation',
  templateUrl: './poll-detail.component.html',
  styleUrls: [ './poll-detail.component.css' ]
} )
export class PollDetailComponent implements OnInit {


  constructor( public _activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
      const pollID: number = params[ 'id' ];
      console.log( 'Obtener datos de encuesta ' );
    } );
  }
}
