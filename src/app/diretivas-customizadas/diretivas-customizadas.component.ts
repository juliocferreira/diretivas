import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showBook: boolean = false;

  show() {
    this.showBook = !this.showBook;
  }

}
