import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {
    //console.log(elementRef);
    //this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "background-color",
      "yellow"
    );
  }

}
