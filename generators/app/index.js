'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const underscoreString = require('underscore.string');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Angular Library') + ' generator!'
    ));
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'authorName',
        message: 'Your full name:',
        validate: function (input) {
          if (/.+/.test(input)) {
            return true;
          }
          return 'Please enter your full name';
        },
        default: this.user.git.name
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Your email address:',
        validate: function (input) {
          if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)) {
            return true;
          }
          return 'Please enter a valid email address';
        },
        default: this.user.git.email
      },
      {
        type: 'input',
        name: 'libraryName',
        message: 'Your library name (kebab-case)',
        default: underscoreString.slugify(this.appname),
        filter: function (x) {
          return underscoreString.slugify(x);
        }
      },
      {
        type: 'input',
        name: 'gitRepositoryUrl',
        message: 'Git repository url',
        default: 'https://github.com/username/repo',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {

      this.props = {

        author: {
          name: props.authorName,
          email: props.authorEmail
        },

        libraryName: {
          original: props.libraryName,
          kebabCase: props.libraryName
        },

        gitRepositoryUrl: props.gitRepositoryUrl
      };

    });
  }

  writing() {

    // Copy .gitignore
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    // Copy .npmignore
    this.fs.copy(
      this.templatePath('npmignore'),
      this.destinationPath('.npmignore')
    );

    // Copy .travis.yml
    this.fs.copy(
      this.templatePath('travis.yml'),
      this.destinationPath('.travis.yml')
    );

    // Copy tsconfig.json
    this.fs.copyTpl(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json'),
      {
        props: this.props
      }
    );

    // Copy tslint.json
    this.fs.copyTpl(
      this.templatePath('_tslint.json'),
      this.destinationPath('tslint.json'),
      {
        props: this.props
      }
    );

    // Copy package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        props: this.props
      }
    );

    // Copy README
    this.fs.copyTpl(
      this.templatePath('README.MD'),
      this.destinationPath('README.MD'),
      {
        props: this.props
      }
    );

    // Copy tools directory
    this.fs.copyTpl(
      this.templatePath('tools/**/*'),
      this.destinationPath('tools')
    );

    // Copy gulpfile.js
    this.fs.copyTpl(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js'),
      {
        props: this.props
      }
    );

    // Copy src folder
    this.fs.copy(
      this.templatePath('src/**/*.ts'),
      this.destinationPath('src')
    );

    // Copy src/package.json
    this.fs.copyTpl(
      this.templatePath('src/_package.json'),
      this.destinationPath('src/package.json'),
      {
        props: this.props
      }
    );

    // Copy src/tsconfig.es5.json
    this.fs.copyTpl(
      this.templatePath('src/_tsconfig.es5.json'),
      this.destinationPath('src/tsconfig.es5.json'),
      {
        props: this.props
      }
    );
  }

  install() {
    this.installDependencies({bower: false});
  }
};
