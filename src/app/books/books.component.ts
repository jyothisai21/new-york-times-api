import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksData:any;
  constructor(private booksservice:BooksService) { }

  ngOnInit(): void {
    this.booksservice.getbooks().subscribe((response)=>{
  this.booksData=response;
    })
  }

}
