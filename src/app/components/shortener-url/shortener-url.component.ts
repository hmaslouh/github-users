import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css']
})
export class ShortenerUrlComponent implements OnInit {

  shortenerUrl: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  transformUrl(event){
    this.shortenerUrl  = event.target.value;
  }

}
