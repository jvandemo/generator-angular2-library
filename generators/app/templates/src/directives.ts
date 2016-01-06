// Import all directives
import {SampleDirective} from './directives/sample.directive';
import {SampleComponent} from './directives/sample.component';

// Export all directives
export * from './directives/sample.directive';
export * from './directives/sample.component';

// Export convenience property
export const DIRECTIVES: any[] = [
  SampleDirective,
  SampleComponent
];
