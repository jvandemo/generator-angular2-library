import {DIRECTIVES} from './src/directives';
import {PIPES} from './src/pipes';
import {PROVIDERS} from './src/services';

export * from './src/directives';
export * from './src/services';
export * from './src/pipes';

export default {
  directives: [DIRECTIVES],
  pipes: [PIPES],
  providers: [PROVIDERS]
}
