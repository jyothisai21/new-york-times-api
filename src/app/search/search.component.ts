import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchData:string=""
Search:any

  constructor(private searchService:SearchService) { }
  Url:string="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
  End:string= "&api-key=DGOAGOVIuu4CPq1k1PNGbVnquyZqwyEA"
  imageurl:string="https://static01.nyt.com/"
  ngOnInit(): void {
  }
Onclick(){
  console.log(this.searchData)
  this.Search=null
  console.log(this.Search)
this.searchService.getsearch(this.searchData).subscribe((response)=>{
  this.Search=response;
  
  console.log(this.Search)

})
}
}
