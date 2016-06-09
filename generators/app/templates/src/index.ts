import {DIRECTIVES} from './directives';
import {PIPES} from './pipes';
import {PROVIDERS} from './services';

export * from './directives';
export * from './services';
export * from './pipes';

export default {
  directives: [DIRECTIVES],
  pipes: [PIPES],
  providers: [PROVIDERS]
}
