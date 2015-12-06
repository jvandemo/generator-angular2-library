# generator-angular2-library
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Yeoman generator to create a standalone Angular 2 library in seconds.
 
If you want to create an Angular 2 library with directives, services and/or pipes, then this generator is just what you need.

The generator:

- creates and configures `package.json`
- creates and configures `tsconfig.json`
- creates the main library file
- creates a sample directive, component, service and pipe

## Quick start

First, install [Yeoman](http://yeoman.io) and generator-angular2-library using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-angular2-library
```

Then generate your new library:

```bash
$ yo angular2-library
```

The generator creates the following files for you:

```bash
.
├── angular2-library-name.ts
├── angular2-library.ts
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
└── tsconfig.json
```

You can then add or edit `*.ts` files and run:

```bash
$ npm run tsc
```

to automatically create all `*.js`, `*.js.map` and `*.d.ts` files.

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Jurgen Van de Moere](http://www.jvandemo.com)


[npm-image]: https://badge.fury.io/js/generator-angular2-library.svg
[npm-url]: https://npmjs.org/package/generator-angular2-library
[travis-image]: https://travis-ci.org/jvandemo/generator-angular2-library.svg?branch=master
[travis-url]: https://travis-ci.org/jvandemo/generator-angular2-library
[daviddm-image]: https://david-dm.org/jvandemo/generator-angular2-library.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jvandemo/generator-angular2-library
[coveralls-image]: https://coveralls.io/repos/jvandemo/generator-angular2-library/badge.svg
[coveralls-url]: https://coveralls.io/r/jvandemo/generator-angular2-library
