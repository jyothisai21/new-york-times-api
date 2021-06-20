import { Component, OnInit } from '@angular/core';
import { ArtsService } from '../arts.service'
@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  artsData:any;
  constructor(private artsservice:ArtsService) { }

  ngOnInit(): void {
    this.artsservice.getarts().subscribe((response)=>{
  this.artsData=response;
    })
  }

}
