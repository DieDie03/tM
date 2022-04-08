import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  hasRoute(route:string){
    return this._router.url === route;
  }

}