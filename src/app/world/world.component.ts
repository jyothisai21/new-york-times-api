import { Component, OnInit,Input } from '@angular/core';
import { WorldService } from '../world.service'
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  worldData:any;
  constructor(private worldservice:WorldService) { }

  ngOnInit(): void {
    this.worldservice.getworld().subscribe((response)=>{
  this.worldData=response;
    })
  }

}
