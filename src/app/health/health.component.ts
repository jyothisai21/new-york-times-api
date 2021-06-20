import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service'
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthData:any;
  constructor(private healthservice:HealthService) { }

  ngOnInit(): void {
    this.healthservice.gethealth().subscribe((response)=>{
  this.healthData=response;
    })
  }

}
