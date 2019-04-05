import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }
  
  cursos: string[] = ["Angular 2", "Go Lang", "AWS"];

  ngOnInit() {
  
  }

}
