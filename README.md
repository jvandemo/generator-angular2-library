![angular-2-github-hero](https://cloud.githubusercontent.com/assets/1859381/15291385/d643128a-1b7d-11e6-9e78-173c6e82cf91.jpg)
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

[Yeoman](http://yeoman.io) generator to create a standalone [Angular 2](https://angular.io/) library in seconds.

If you want to create an Angular 2 library with directives, services and/or pipes, then this generator is just what you need.

The generator:

- creates and configures `package.json`
- creates and configures `tsconfig.json`
- creates and configures `tslint.json`
- creates and configures `typings.json`
- creates and configures `.gitignore`, `.npmignore` and `.travis.yml`
- creates the main library file
- creates a sample directive, component, service and pipe
- creates boilerplate code to conveniently export `PROVIDERS`, `DIRECTIVES` and `PIPES` properties
- creates a default export for future compatibility with angular cli, see this [discussion for more](https://github.com/angular/angular-cli/issues/96)

## Quick start

First, install [Yeoman](http://yeoman.io) and generator-angular2-library using [npm](https://www.npmjs.com/) (assuming you already have [node.js](https://nodejs.org/) pre-installed).

```bash
$ npm install -g yo
$ npm install -g generator-angular2-library
```

make a new directory and `cd` into it:

```bash
$ mkdir angular2-library-name
$ cd angular2-library-name
```

and generate your new library:

```bash
$ yo angular2-library
```

The generator will prompt you for:

```bash
? Your full name: Jurgen Van de Moere
? Your email address: jurgen.van.de.moere@gmail.com
? Your library name (kebab case): angular2-library-name
? Git repository url: https://github.com/jvandemo/angular2-library-name
```

and create the following files for you:

```bash
.
├── angular2-library-name.ts
├── package.json
├── src
│   ├── directives
│   │   ├── sample.component.ts
│   │   └── sample.directive.ts
│   ├── directives.ts
│   ├── pipes
│   │   └── sample.pipe.ts
│   ├── pipes.ts
│   ├── services
│   │   └── sample.service.ts
│   └── services.ts
├── tsconfig.json
├── tslint.json
└── typings.json
```

You can then add or edit `*.ts` files and run:

```bash
# Lint code
# npm run lint

# Compile library
$ npm run tsc
```

to automatically create all `*.js`, `*.js.map` and `*.d.ts` files.

## `PROVIDERS`, `DIRECTIVES` and `PIPES`

The generator automatically prepares boilerplate code to export convenient bundle properties.

As a library author you are free to choose whether you want to do this or not (see [this discussion](https://github.com/angular/angular/issues/5503)).

The benefit is that consumers of your library can easily import bundles of services, directives and pipes:

```javascript
import { Component } from 'angular2/core';
import { PROVIDERS, DIRECTIVES, PIPES } from 'angular2-library-name/angular2-library-name';

@Component({
  selector: 'app'
  providers: [PROVIDERS]
  directives: [DIRECTIVES],
  pipes: [PIPES]
})
export class AppComponent{
  // ...
}

```

The Angular team uses a similar approach with `CORE_DIRECTIVES`, `FORM_DIRECTIVES` and `ROUTER_PROVIDERS`.

## To do

- Create build process for building library that automatically registers with SystemJS so it can be hosted statically and imported using `<script>` element
- Create process for running unit tests

## Issues

Please report bugs and issues [here](https://github.com/jvandemo/generator-angular2-library/issues).

## Development

To run the generator unit tests:

```bash
$ npm run test
```

## License

MIT © [Jurgen Van de Moere](http://www.jvandemo.com)

## Change log

### v1.1.1

- Updated templates to Angular 2.0.0 RC1 syntax

### v1.1.0

- Added codelyzer support
- Added tslint support
- Added typings support

### v1.0.0

- BREAKING CHANGE: Updated to support [Angular 2.0.0-rc.1](https://github.com/angular/angular/blob/master/CHANGELOG.md#200-rc1-2016-05-03)

### v0.6.0

- Updated dependency versions

### v0.5.0

- Added `browser.d.ts` to files in `tsconfig.json` instead of using tripleslash (see #9)

### v0.4.0

- Added reference to Angular typings

### v0.3.1

- Removed explicit RxJS dependency

### v0.3.0

- Updated to Angular 2 beta

### v0.2.0

- Added documentation
- Added support for `PROVIDERS`, `DIRECTIVES` and `PIPES`

### v0.1.0

- Added documentation
- Added boilerplate scaffolding
- Initial version

[npm-image]: https://badge.fury.io/js/generator-angular2-library.svg
[npm-url]: https://npmjs.org/package/generator-angular2-library
[travis-image]: https://travis-ci.org/jvandemo/generator-angular2-library.svg?branch=master
[travis-url]: https://travis-ci.org/jvandemo/generator-angular2-library
[daviddm-image]: https://david-dm.org/jvandemo/generator-angular2-library.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jvandemo/generator-angular2-library
[coveralls-image]: https://coveralls.io/repos/jvandemo/generator-angular2-library/badge.svg
[coveralls-url]: https://coveralls.io/r/jvandemo/generator-angular2-library
