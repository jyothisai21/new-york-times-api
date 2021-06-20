import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { WorldComponent } from './world/world.component';
import { CardComponent } from './card/card.component';
import { UsComponent } from './us/us.component';

import { NyComponent } from './ny/ny.component';
import { BusinessComponent } from './business/business.component';
import { OpinionComponent } from './opinion/opinion.component';

import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { ArtsComponent } from './arts/arts.component';
import { BooksComponent } from './books/books.component';
import { StyleComponent } from './style/style.component';

import { TravelComponent } from './travel/travel.component';
import { MagazineComponent } from './magazine/magazine.component';
import { RealestateComponent } from './realestate/realestate.component';

import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WorldComponent,
    CardComponent,
    UsComponent,
    NyComponent,
    BusinessComponent,
    OpinionComponent,
    ScienceComponent,
    HealthComponent,
    SportsComponent,
    ArtsComponent,
    BooksComponent,
    StyleComponent,
    TravelComponent,
    MagazineComponent,
    RealestateComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
