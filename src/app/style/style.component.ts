import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service'
@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  styleData:any;
  constructor(private styleservice:StyleService) { }

  ngOnInit(): void {
    this.styleservice.getstyle().subscribe((response)=>{
  this.styleData=response;
    })
  }

}
