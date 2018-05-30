import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

import { ListFruitsComponent } from './components/list-fruits/list-fruits.component';
import { HttpModule } from '@angular/http';
import { ListLegumesComponent } from './components/list-legumes/list-legumes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFruitsComponent,
    ListLegumesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,ListFruitsComponent,ListLegumesComponent]
})
export class AppModule { }
