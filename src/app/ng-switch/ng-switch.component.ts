import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  aba: string = 'home';
  constructor() { }

  ngOnInit() {
  }

}
