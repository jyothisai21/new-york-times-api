import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service'
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  travelData:any;
  constructor(private travelservice:TravelService) { }

  ngOnInit(): void {
    this.travelservice.gettravel().subscribe((response)=>{
  this.travelData=response;
    })
  }

}
