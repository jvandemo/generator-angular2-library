import {CONST_EXPR} from 'angular2/src/facade/lang';

// Import all directives
import {SampleDirective} from './directives/sample.directive';
import {SampleComponent} from './directives/sample.component';

// Export all directives
export {SampleDirective} from './directives/sample.directive';
export {SampleComponent} from './directives/sample.component';

// Export convenience property
export const DIRECTIVES = CONST_EXPR([
  SampleDirective,
  SampleComponent
]);
