import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input ('abstract') abstract=""
  @Input ('byline') byline=""
  @Input('date') date=""
  @Input ('itemtype') itemtype=""
  @Input ('section') section=""
  @Input ('title') title=""
  @Input ('short') short=""
  @Input('image') image=""
 


  constructor() { }

  ngOnInit(): void {
  }

}
