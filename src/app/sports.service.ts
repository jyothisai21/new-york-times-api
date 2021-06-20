import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  Url:string="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=DGOAGOVIuu4CPq1k1PNGbVnquyZqwyEA"

  constructor(private httpClient:HttpClient ) { 

  }
  getsports() {
    return this.httpClient.get(this.Url)
  }
}
