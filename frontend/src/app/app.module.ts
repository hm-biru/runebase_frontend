import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RunesComponent } from './runes/runes.component';
import { NavbarComponent } from './_template/navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RunesComponent,
    NavbarComponent,
    SettingsComponent,
    UserCreateComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
