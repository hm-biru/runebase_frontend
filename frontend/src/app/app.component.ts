import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RunesComponent } from './runes/runes.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
      path: 'runes',
      component: RunesComponent
  },
  {
      path: 'settings',
      component: SettingsComponent
  },
  {
    path: 'login',
    component: SettingsComponent
},
{
  path: 'settings',
  component: SettingsComponent
},
{
  path: 'settings',
  component: SettingsComponent
},
{
  path: 'settings',
  component: SettingsComponent
},{
  path: 'settings',
  component: SettingsComponent
}
  

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Runebase';
}