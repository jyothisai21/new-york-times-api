import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { BooksComponent } from './books/books.component';
import { BusinessComponent } from './business/business.component';

import { HealthComponent } from './health/health.component';

import { MagazineComponent } from './magazine/magazine.component';
import { NyComponent } from './ny/ny.component';
import { OpinionComponent } from './opinion/opinion.component';
import { RealestateComponent } from './realestate/realestate.component';
import { ScienceComponent } from './science/science.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { StyleComponent } from './style/style.component';


import { TopbarComponent } from './topbar/topbar.component';
import { TravelComponent } from './travel/travel.component';
import { UsComponent } from './us/us.component';

import { WorldComponent } from './world/world.component';

const routes: Routes = [
 
  {
    path:"topbar",
    component:TopbarComponent,
  },
      {
        path:"",
        component:WorldComponent
      },
      {
        path:"us",
        component:UsComponent
      },
    
      {
        path:"ny",
        component:NyComponent
      },
      {
        path:"business",
        component:BusinessComponent
      },
      {
        path:"opinion",
        component:OpinionComponent
      },
     
      {
        path:"science",
        component:ScienceComponent
      },
      {
        path:"health",
        component:HealthComponent
      },
      {
        path:"sports",
        component:SportsComponent
      },
      {
        path:"arts",
        component:ArtsComponent
      },
      {
        path:"books",
        component:BooksComponent
      },
      {
        path:"style",
        component:StyleComponent
      },
      
      {
        path:"travel",
        component:TravelComponent
      },
      {
        path:"magazine",
        component:MagazineComponent
      },
     
      {
        path:"realestate",
        component:RealestateComponent
      },
      
     
      {
      path:"search",
      component:SearchComponent
      }
     
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
