import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../magazine.service'
@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  magazineData:any;
  constructor(private magazineservice:MagazineService) { }

  ngOnInit(): void {
    this.magazineservice.getmagazine().subscribe((response)=>{
  this.magazineData=response;
    })
  }

}
