import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../opinion.service'
@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  opinionData:any;
  
  constructor(private opinionservice:OpinionService) { }

  ngOnInit(): void {
    this.opinionservice.getopinion().subscribe((response)=>{
  this.opinionData=response;
    })
  }

}
