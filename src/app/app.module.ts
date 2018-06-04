import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

import { ListFruitsTrieComponent } from './components/fruits/fruits-trie/list-fruits.component';
import { HttpModule } from '@angular/http';
import { ListLegumesTrieComponent } from './components/legumes/legume-trie/list-legumes.component';
import { SingleAlimentComponent } from './components/single-aliment/single-aliment.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListTousFruitsComponent } from './components/fruits/list-tous-fruits/list-tous-fruits.component';
import { ListTousLegumesComponent } from './components/legumes/list-tous-legumes/list-tous-legumes.component';
import { FruitsDeSaisonComponent } from './components/fruits/fruits-de-saison/fruits-de-saison.component';
import { legumesDeSaisonComponent } from './components/legumes/legumes-de-saison/legumes-de-saison.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'fruits', component: ListTousFruitsComponent },
  { path: 'fruits-de-saison', component: FruitsDeSaisonComponent },
  { path: 'legumes-de-saison', component: legumesDeSaisonComponent },
  { path: 'legumes', component: ListTousLegumesComponent },
  { path: 'fruits/:name', component: SingleAlimentComponent },
  { path: 'legumes/:name', component: SingleAlimentComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFruitsTrieComponent,
    ListLegumesTrieComponent,
    SingleAlimentComponent,
    HomeComponent,
    ListTousFruitsComponent,
    ListTousLegumesComponent,
    FruitsDeSaisonComponent,
    legumesDeSaisonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
