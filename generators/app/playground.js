'use strict';

const setupPlayground =
  (generator) => {
    // Copy playground
    generator.fs.copyTpl(
      generator.templatePath('playground/_systemjs.config.js'),
      generator.destinationPath('playground/systemjs.config.js'),
      {
        props: generator.props
      }
    );

    generator.fs.copy(
      generator.templatePath('playground/systemjs-angular-loader.js'),
      generator.destinationPath('playground/systemjs-angular-loader.js')
    );

    generator.fs.copyTpl(
      generator.templatePath('playground/_index.ts'),
      generator.destinationPath('playground/index.ts'),
      {
        props: generator.props
      }
    );

    generator.fs.copyTpl(
      generator.templatePath('playground/_index.html'),
      generator.destinationPath('playground/index.html'),
      {
        props: generator.props
      }
    );

    generator.fs.copy(
      generator.templatePath('playground/tsconfig.json'),
      generator.destinationPath('playground/tsconfig.json')
    );

    generator.fs.copy(
      generator.templatePath('bs-config.json'),
      generator.destinationPath('bs-config.json')
    );
  };

module.exports = setupPlayground;
