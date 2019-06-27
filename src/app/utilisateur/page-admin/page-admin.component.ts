import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {
  active: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  switchActive(value : boolean){
    this.active = value;
  }

}
