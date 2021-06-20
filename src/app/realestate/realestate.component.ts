import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../realestate.service'
@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit {

  realestateData:any;
  constructor(private realestateservice:RealestateService) { }

  ngOnInit(): void {
    this.realestateservice.getrealestate().subscribe((response)=>{
  this.realestateData=response;
    })
  }
}
