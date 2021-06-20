import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  Url:string="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
  End:string= "&api-key=DGOAGOVIuu4CPq1k1PNGbVnquyZqwyEA"
  
  constructor(private httpClient:HttpClient ) { 

  }
  getsearch(query:string) {
    console.log(query)
    return this.httpClient.get(this.Url + query +this.End)
  }
}
