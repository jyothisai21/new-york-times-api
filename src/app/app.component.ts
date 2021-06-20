import { Component,OnInit } from '@angular/core';
import { CardDataService } from './card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projectnew1';
  cardData:any;
  constructor(private cardDataservice: CardDataService){}
  ngOnInit():void{
    this.cardDataservice.getcardData().subscribe((res)=>{
      this.cardData=res
  })
}
}

