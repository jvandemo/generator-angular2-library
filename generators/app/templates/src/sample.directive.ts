import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[sampleDirective]'
})
export class SampleDirective {

  constructor(private el: ElementRef) {
  }

}
