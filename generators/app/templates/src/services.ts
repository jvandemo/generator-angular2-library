// Import all services
import {SampleService} from './services/sample.service';

// Export all services
export * from './services/sample.service';

// Export convenience property
export const PROVIDERS: any[] = [
  SampleService
];
