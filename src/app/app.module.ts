import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

import { ListFruitsComponent } from './components/list-fruits/list-fruits.component';
import { HttpModule } from '@angular/http';
import { ListLegumesComponent } from './components/list-legumes/list-legumes.component';
import { SingleAlimentComponent } from './components/single-aliment/single-aliment.component';

import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'fruits', component: ListFruitsComponent },
  { path: 'legumes', component: ListLegumesComponent},
  { path: 'fruits/:name', component: SingleAlimentComponent},
  { path: 'legumes/:name', component: SingleAlimentComponent},
  { path: '',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFruitsComponent,
    ListLegumesComponent,
    SingleAlimentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
