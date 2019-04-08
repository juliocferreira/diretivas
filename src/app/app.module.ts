import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIfComponent } from './ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { AlteraBackgroundDirective } from './shared/altera-background.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { FormatDateDirective } from './shared/format-date.directive';
@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    FormularioComponent,
    NgContentComponent,
    AlteraBackgroundDirective,
    DiretivasCustomizadasComponent,
    HighlightDirective,
    NgElseDirective,
    FormatDateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
