import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { filter } from 'minimatch';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-details-utilisateur',
  templateUrl: './details-utilisateur.component.html',
  styleUrls: ['./details-utilisateur.component.scss']
})
export class DetailsUtilisateurComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'actionEdit',"actionDelete"];
  dataSource: MatTableDataSource<UserData>;
  myUsers: UserData[]= [];
  id : string;
  nom : string;
  prenom : string;

  columnsToDisplay: string[] = this.displayedColumns.slice();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {

    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.myUsers = users;
    this.dataSource = new MatTableDataSource(this.myUsers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  SuppColonne() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  deleteUser(id:string){
    this.myUsers = this.myUsers.filter( (u) => u.id !==id); 
    this.dataSource.data = this.myUsers;
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
    }

  getInitialUser (name : string){
    var nom = name.split("");
    var init="";
    var i;
    while(i<nom.length){
      init+=nom[i][0];
      i++
    }return (init.toUpperCase)
    
  }

  openDialog(user : UserData): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent , {
      height: '90vh',
      width: '60%',
      data: {user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.id = result;
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };

 

}
