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
      'index.ts'
    ]);
  });

  it('should create sample component', function () {
    assert.file([
      'src/sample.component.ts'
    ]);
  });

  it('should create sample directive', function () {
    assert.file([
      'src/sample.directive.ts'
    ]);
  });

  it('should create sample pipe', function () {
    assert.file([
      'src/sample.pipe.ts'
    ]);
  });

  it('should create sample service', function () {
    assert.file([
      'src/sample.service.ts'
    ]);
  });

});
