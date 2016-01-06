import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: '[sample-directive]'
})
export class SampleDirective {

  constructor(private el:ElementRef){

  }

}
