import { Directive, HostListener, HostBinding, ElementRef, Renderer, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[formatDate]'
})
export class FormatDateDirective {

  constructor(private _elementRef: ElementRef) { }

  @HostBinding('value') value: string = '';

  @HostListener('keyup') changeText() {
    this.value = this._elementRef.nativeElement.value;
    let length = this.value.length;

    if(length == 2) {
      this.value+= "-"
    }

    if(length == 5) {
      this.value += "-"
    }
  
    console.log(this.value);
  }



}
