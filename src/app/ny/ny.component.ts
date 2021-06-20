import { Component, OnInit } from '@angular/core';
import { NyService } from '../ny.service'
@Component({
  selector: 'app-ny',
  templateUrl: './ny.component.html',
  styleUrls: ['./ny.component.css']
})
export class NyComponent implements OnInit {

  nyData:any;
  constructor(private nyservice:NyService) { }

  ngOnInit(): void {
    this.nyservice.getny().subscribe((response)=>{
  this.nyData=response;
    })
  }

}
