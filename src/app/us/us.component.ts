import { Component, OnInit } from '@angular/core';
import { UsService } from '../us.service'
@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {
  usData:any;
  constructor(private usservice:UsService) { }

  ngOnInit(): void {
    this.usservice.getUs().subscribe((response:any)=>{
      this.usData=response;
  })
}

}
