'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angular-2-library:app', function () {

  before(function (done) {

    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({})
      .withPrompts({libraryName: 'angular2-library-name'})
      .on('end', done);

  });

  it('should create package.json', function () {
    assert.file([
      'package.json'
    ]);
  });

  it('should create tsconfig.json', function () {
    assert.file([
      'tsconfig.json'
    ]);
  });

  it('should create .gitignore', function () {
    assert.file([
      '.gitignore'
    ]);
  });

  it('should create .npmignore', function () {
    assert.file([
      '.npmignore'
    ]);
  });

  it('should create README.MD', function () {
    assert.file([
      'README.MD'
    ]);
  });

  it('should create main library file', function () {
    assert.file([
      'angular2-library-name.ts'
    ]);
  });

  it('should create sample pipes', function () {
    assert.file([
      'src/pipes.ts',
      'src/pipes/sample.pipe.ts'
    ]);
  });

  it('should create sample services', function () {
    assert.file([
      'src/services.ts',
      'src/services/sample.service.ts'
    ]);
  });

  it('should create sample directives', function () {
    assert.file([
      'src/directives.ts',
      'src/directives/sample.directive.ts',
      'src/directives/sample.component.ts'
    ]);
  });

});
