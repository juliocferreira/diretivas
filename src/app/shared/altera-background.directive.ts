import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[alteraBackground]'
})
//exemplo de diretiva de atributo customizada para altera a cor de fundo de um componente
export class AlteraBackgroundDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    // outra forma e fazer isso, no entanto não é tão recomendado
    //this._elementRef.nativeElement.style.backgroundColor = 'blue';
    //this._elementRef.nativeElement.style.color = 'white';
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'blue'
    );

    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'color',
      'red'
    );
  }
}
