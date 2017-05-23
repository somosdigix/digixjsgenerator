const Generator = require('yeoman-generator');

/*
  Possible options:
  - Ident style
  - Ident size
  - End of line
  - Insert final newline
*/

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('framework');
  }

  initializing() {
    this.log('Instalando');
  }

  writing() {
    this.log('writing');
    
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath('./')
    );
  }

  install() {
    // this.installDependencies({
    //   npm: true,
    //   bower: false,
    //   yarn: false
    // });
  }
};
