import { Directive, ElementRef } from 'angular2/angular2';

@Directive({
  selector: '[sample-directive]'
})
export class SampleDirective {

  constructor(private el:ElementRef){

  }

}
