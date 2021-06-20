import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  Url:string="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=DGOAGOVIuu4CPq1k1PNGbVnquyZqwyEA"

  constructor(private httpClient:HttpClient ) { 

  }
  getrealestate() {
    return this.httpClient.get(this.Url)
  }
}
