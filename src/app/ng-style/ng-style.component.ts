import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
