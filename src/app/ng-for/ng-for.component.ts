import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }
  
  cursos: any[] = [{
    nome: "Java",
    local: {
      rua: "Prazeres",
      gps: {
        long: 0.0992039309,
        lat: 0.938474848
      }
    }
  }, {
    nome: "Go Lang"
  }, {
    nome: "AWS",
    local: {
      rua: "Rua do apolo",
      numero: 300
    }
  }, {
    nome: "Angular +",
    local: {
      rua: "Av barbosa lima",
      numero: 100
    }
  }];

  ngOnInit() {
  
  }

}
