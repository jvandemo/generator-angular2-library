![generator-angular-2-library](https://cloud.githubusercontent.com/assets/1859381/24447242/901c8a1a-1470-11e7-8b55-2484b7825722.jpg)
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

[Yeoman](http://yeoman.io) generator to create a standalone [Angular](https://angular.io/) library in seconds.

If you want to create an Angular library with directives, services and/or pipes, then this generator is just what you need.

This generator aligns with the [official Angular Package Format](https://goo.gl/AMOU5G) and automatically generates a [Flat ES Module](http://angularjs.blogspot.be/2017/03/angular-400-now-available.html), a single metadata.json and type definitions to make your library ready for AOT compilation by the consuming Angular application.

Watch [Jason Aden's talk](https://www.youtube.com/watch?v=unICbsPGFIA) to learn more about the Angular Package Format.

More specifically, this generator:

- creates and configures `package.json` for the development of your library
- creates and configures a second `package.json` for the distribution of your library
- creates and configures `tsconfig.json` for your editor during development
- creates and configures `tslint.json` for linting purposes
- creates and configures `.gitignore`, `.npmignore` and `.travis.yml`
- creates the main library file, a sample directive, a sample component, a sample service and a sample pipe
- configures [tslint](https://palantir.github.io/tslint/) for you with [codelyzer](https://github.com/mgechev/codelyzer) support
- creates and configures build scripts to generate a Flat ES Module (FESM), type definitions and metadata files for your library to make it ready for AOT compilation
- inlines templates automatically for you so you can use external HTML templates
- inlines styles automatically for you so you can use external CSS templates

This generator is built for Angular version 2 and above, hence the name generator-angular2-library. If you are looking for a similar generator for AngularJS 1.x, please visit [generator-angularjs-library](https://github.com/jvandemo/generator-angularjs-library).

## Quick start

![generator-angular2-library-demo](https://cloud.githubusercontent.com/assets/1859381/24452029/a3c93034-1481-11e7-8006-d6eb6f94ed20.gif)

First, install [Yeoman](http://yeoman.io) and generator-angular2-library using [npm](https://www.npmjs.com/) (assuming you already have [node.js](https://nodejs.org/) pre-installed).

```bash
$ npm install -g yo
$ npm install -g generator-angular2-library
```

make a new directory and `cd` into it:

```bash
$ mkdir angular-library-name
$ cd angular-library-name
```

and generate your new library:

```bash
$ yo angular2-library
```

The generator will prompt you for:

```bash
? Your full name: Jurgen Van de Moere
? Your email address: jurgen.van.de.moere@gmail.com
? Your library name (kebab case): angular-library-name
? Git repository url: https://github.com/jvandemo/angular2-library-name
```

and create the following files for you:

```bash
.
├── README.MD
├── build.sh
├── package.json
├── src
│   ├── index.ts
│   ├── package.json
│   ├── sample.component.ts
│   ├── sample.directive.ts
│   ├── sample.pipe.ts
│   ├── sample.service.ts
│   └── tsconfig.es5.json
├── tsconfig.json
└── tslint.json
```

You can then add or edit `*.ts` files in the `src/` directory and run:

```bash
$ npm run build
```

to automatically create all `*.js`, `*.d.ts` and `*.metadata.json` files in the `dist/` directory.

## Linting your code

Everything comes pre-configured with tslint and codelyzer support. To lint your code:

```bash
$ npm run lint
```

## Building your library

From the root of your library directory, run:

```bash
$ npm run build
```

This will generate a `dist` directory with:

- a `package.json` file specifically for distribution with Angular listed in the `peerDependencies`
- `sample-library.js`: a Flat ES Module (FESM) file that contains all your library code in a single file
- `*.d.ts`: type definitions for you library
- `sample-library.metadata.json`: metadata for your library to support AOT compilation 

## Publishing your library to NPM

To publish your library to NPM, first generate the `dist` directory:

```bash
$ npm run build
```

and then publish the contents of the `dist` directory to NPM:

```bash
$ npm publish dist
```

## Consuming your library

Once you have published your library to the NPM registry, you can import it in any Angular application by first installing it using NPM:

```bash
$ npm install sample-library # use the name you used to publish to npm
```

and then importing your library in your Angular `AppModule` (or whatever module you wish to import your library into):

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'sample-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    // Specify your library as an import
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your shared library is imported, you can use its components, directives and pipes in your Angular application templates:

```xml
<!-- app.component.html -->
<h1>{{ title }}</h1>
<sample-component>
  This component is part of the shared library and will now work as expected.
</sample-component>
```

and if you need to access a service from your shared library, you can inject it using Dependency Injection:

```typescript
import { Component } from '@angular/core';

// Import the shared service
import { SampleService } from 'sample-library';

@Component({
  template: 'Injecting a service from the shared library'
})
export class HomeComponent {

  // Inject the service using Angular DI 
  constructor(private sampleService: SampleService){
  
  }

}
```

To learn more about Angular Dependency Injection, check out the [Official Angular Documentation](https://angular.io/docs/ts/latest/cookbook/dependency-injection.html).

## Consuming your library during development

To consume your library before you publish it to npm, you can follow the following steps:

1. Create your library:
  ```
  $ yo angular2-library
  ```
  Let's assume you name your library `sample-library`.
  
2. Navigate to the `sample-library` directory:
  ```
  $ cd sample-library
  ```
  
3. Compile your library files:
  ```
  $ npm run build
  ```
  
4. From the `sample-library/dist` directory, create a symlink in the global node_modules directory to the `dist` directory of your library:
  ```
  $ cd dist
  $ npm link
  ```
  
5. Create a new Angular app. Let's assume you use angular-cli:
  ```
  $ cd /your-projects-path
  $ ng new my-app
  ```
  
6. Navigate to the `my-app` directory:
  ```
  $ cd my-app
  ``` 
  
7. From the `my-app` directory, link the global `sample-library` directory to node_modules of the `my-app` directory:
  ```
  $ npm link sample-library
  ```
  
8. Import `SampleModule` in your Angular application:

  ```typescript
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  
  import { AppComponent } from './app.component';
  
  // Import your library
  import { SampleModule } from 'sample-library';
  
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      
      // Specify your library as an import
      SampleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

9. Once your shared library is imported, you can use its components, directives and pipes in your Angular application templates:

  ```xml
  <!-- app.component.html -->
  <h1>{{ title }}</h1>
  <sample-component>
    This component is part of the shared library and will now work as expected.
  </sample-component>
  ```
  
  and if you need to access a service from your shared library, you can inject it using Dependency Injection:
  
  ```typescript
  import { Component } from '@angular/core';
  
  // Import the shared service
  import { SampleService } from 'sample-library';
  
  @Component({
    template: 'Injecting a service from the shared library'
  })
  export class HomeComponent {
  
    // Inject the service using Angular DI 
    constructor(private sampleService: SampleService){
    
    }
  
  }
  ```
  
10. When you make a change to your library, recompile your library files again from your `sample-library` directory:
  ```
  $ npm run build
  ```
    
11. If you want to automatically recompile the library files when a file in `src` changes, run
  ```
  $ npm run build:watch
  ```
  
## To do

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

### v9.0.0

- Added Gulp for support on Mac, Linux and Windows (Credits to [Carlos Roso](https://github.com/caroso1222))
- Added template inlining (Credits to [Filipe Silva](https://github.com/filipesilva))
- Added style inlining (Credits to [Filipe Silva](https://github.com/filipesilva))

### v8.2.1

- Updated TypeScript files in gitignore

### v8.2.0

- Added build:watch script
- Added dist folder to gitignore

### v8.1.0

- Remove prepublish script

### v8.0.0

- Update build process
- Add support for AOT compilation

### v7.0.0

- Update to Angular 4

### v6.0.0

- Update to Yeoman 1.x

### v5.6.0

- Ignore files generated by ngc in .gitignore

### v5.5.2

- Remove obsolete files in package.json

### v5.5.1

- Add README.md to package.json so NPM registry can display it

### v5.5.0

- Update devDependencies

### v5.4.0

- Update to latest tslint and codelyzer

### v5.3.0

- Update TypeScript version to fix #41

### v5.2.1

- Fix eslint errors
- Remove duplicate dependency

### v5.2.0

- Suggest better default library name

### v5.1.0

- Add support for AOT compilation
- Update Angular 2 references to just Angular

### v5.0.0

- Replace typings with @types (#29)

### v4.0.0

- Remove default keyword when exporting module to fix #23

### v3.0.4

- Updated version of Codelyzer
- Updated selector of sample component to kebab case to fix #21

### v3.0.3

- Fixed unit tests

### v3.0.2

- Fixed `README.md` example code

### v3.0.1

- Fixed `tsconfig.json` files

### v3.0.0

- Added support for `NgModule`

### v2.2.0

- Updated dependencies in package.json to Angular 2 final

### v2.1.0

- Updated templates to Angular 2.0.0 RC3 syntax

### v2.0.0

- Updated with file structure using `src` and `dist` directory

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
