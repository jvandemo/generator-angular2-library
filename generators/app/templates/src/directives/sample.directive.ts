import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[sample-directive]'
})
export class SampleDirective {

  constructor(private el:ElementRef){

  }

}
