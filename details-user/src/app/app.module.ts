import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAdminComponent } from './utilisateur/page-admin/page-admin.component';
import { SearchComponent } from './utilisateur/search/search.component';
import { DetailsUtilisateurComponent } from './utilisateur/details-utilisateur/details-utilisateur.component';
import { DialogEditUserComponent } from './utilisateur/dialog-edit-user/dialog-edit-user.component';
import { FormsModule } from '@angular/forms';
import { RandomColorUserComponent } from './random-color-user/random-color-user.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    PageAdminComponent,
    SearchComponent,
    DialogEditUserComponent,
    DetailsUtilisateurComponent,
    RandomColorUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    AppRoutingModule
  ],
  entryComponents: [DialogEditUserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
