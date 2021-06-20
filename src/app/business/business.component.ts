import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessData:any;
  constructor(private businessservice:BusinessService) { }

  ngOnInit(): void {
    this.businessservice.getbusiness().subscribe((response)=>{
  this.businessData=response;
    })
  }

}
