import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = '"Tasks Manager"';
  showAddTask!: boolean ;
  subscription!: Subscription;

  constructor(private _uiService: UiService, private _router:Router) {
    this.subscription = this._uiService.onToggle().subscribe((value) =>(this.showAddTask = value))}

  ngOnInit(): void {
  }

  toggleAddTask(){
    this._uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this._router.url === route;
  }
}
