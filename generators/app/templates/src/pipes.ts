import {CONST_EXPR} from 'angular2/src/facade/lang';

// Import all pipes
import {SamplePipe} from './pipes/sample.pipe';

// Export all pipes
export {SamplePipe} from './pipes/sample.pipe';

// Export convenience property
export const PIPES = CONST_EXPR([
  SamplePipe
]);
