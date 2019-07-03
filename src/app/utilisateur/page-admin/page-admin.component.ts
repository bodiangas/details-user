import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from '../details-utilisateur/details-utilisateur.component';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {
  active: boolean = true;
  dataSource: MatTableDataSource<UserData>;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor() { }

  ngOnInit() {
  }

  switchActive(value : boolean){
    this.active = value;
  }

}
