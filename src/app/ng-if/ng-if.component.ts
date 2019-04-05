import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showBook: boolean = false;
  style: string = "";
  constructor() { }

  ngOnInit() {}

  show() {
    this.showBook = !this.showBook;
  }

}
