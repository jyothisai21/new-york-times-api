import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service'
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsData:any;
  constructor(private sportsservice:SportsService) { }

  ngOnInit(): void {
    this.sportsservice.getsports().subscribe((response)=>{
  this.sportsData=response;
    })
  }

}
