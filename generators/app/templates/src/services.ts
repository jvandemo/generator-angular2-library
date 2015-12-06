import {CONST_EXPR} from 'angular2/src/facade/lang';

// Import all services
import {SampleService} from './services/sample.service';

// Export all services
export {SampleService} from './services/sample.service';

// Export convenience property
export const SERVICES = CONST_EXPR([
  SampleService
]);
