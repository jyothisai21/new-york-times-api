import { Component, OnInit } from '@angular/core';
import { ScienceService } from '../science.service'
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceData:any;
  constructor(private scienceservice:ScienceService) { }

  ngOnInit(): void {
    this.scienceservice.getscience().subscribe((response)=>{
  this.scienceData=response;
    })
  }
}
