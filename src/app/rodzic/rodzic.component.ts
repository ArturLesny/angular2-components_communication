import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodzic',
  templateUrl: './rodzic.component.html',
  styleUrls: ['./rodzic.component.css'],
})

export class RodzicComponent implements OnInit {
  nazwa_rodzic: string;

  constructor() { }

  ngOnInit() {
    this.nazwa_rodzic = 'Ktoś';
  }

  updateNazwa(event:any) {
    console.log('updateNazwa ',event.nazwa);
    this.nazwa_rodzic = event.nazwa;
  }

}
