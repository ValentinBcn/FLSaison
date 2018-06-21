import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

import { HttpModule } from '@angular/http';
//import { ListLegumesTrieComponent } from './components/legumes/legume-trie/list-legumes.component';
import { SingleAlimentComponent } from './components/single-aliment/single-aliment.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListTousFruitsComponent } from './components/fruits/list-tous-fruits/list-tous-fruits.component';
import { ListTousLegumesComponent } from './components/legumes/list-tous-legumes/list-tous-legumes.component';
import { FruitsDeSaisonComponent } from './components/fruits/fruits-de-saison/fruits-de-saison.component';
import { legumesDeSaisonComponent } from './components/legumes/legumes-de-saison/legumes-de-saison.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PersistenceModule } from 'angular-persistence';
import { FilterPipe } from '../app/filter.pipe';
import { authentificationService } from './services/authentification.service';
import { authGuard } from './services/authGuard.service';
import { ResearchPageComponent } from './research-page/research-page.component';
import { GlobaleVariablesService } from './services/globale-variables.service';
import { alimentService } from './services/aliments.service';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';





const appRoutes: Routes = [
  { path: 'fruits', component: ListTousFruitsComponent/*, canActivate: [authGuard] */},
  { path: 'fruits-de-saison', component: FruitsDeSaisonComponent },
  { path: 'legumes-de-saison', component: legumesDeSaisonComponent },
  { path: 'legumes', component: ListTousLegumesComponent },
  { path: 'calendar-page', component: CalendarPageComponent},
  { path: 'fruits/:name', component: SingleAlimentComponent },
  { path: 'legumes/:name', component: SingleAlimentComponent },
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'research-page', component: ResearchPageComponent},
  { path: 'mes-favoris', component: FavoritePageComponent}
]



@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
   // ListLegumesTrieComponent,
    SingleAlimentComponent,
    HomeComponent,
    ListTousFruitsComponent,
    ListTousLegumesComponent,
    FruitsDeSaisonComponent,
    legumesDeSaisonComponent,
    FooterComponent,
    CalendarPageComponent,
    LoginComponent,
    ResearchPageComponent,
    FilterPipe,
    FavoritePageComponent
  ],
  imports: [
    PersistenceModule,
    BrowserModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ authentificationService, authGuard, GlobaleVariablesService,alimentService],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
