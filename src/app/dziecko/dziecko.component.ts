import {Component, EventEmitter, Input, Output, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-dziecko',
  templateUrl: './dziecko.component.html',
  styleUrls: ['./dziecko.component.css'],
})

export class DzieckoComponent implements OnInit, DoCheck {
  @Input() nazwa_dziecko;
  @Output() change_nazwa = new EventEmitter<any>();
  // test_nazwa: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log('ngDoCheck ',this.nazwa_dziecko);
    this.change_nazwa.emit({nazwa: this.nazwa_dziecko});
  }

  zmien_nazwe(){
    console.log('zmien_nazwe ',this.nazwa_dziecko);
    this.change_nazwa.emit({nazwa: this.nazwa_dziecko});
  }
}
