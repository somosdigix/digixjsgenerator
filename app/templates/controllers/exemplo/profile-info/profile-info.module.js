import ko from 'knockout';
import template from './profile-info.template.html';

export default class ProfileInfo {
  constructor (sandbox) {
    this.sandbox = sandbox;
    this.el = sandbox.dom('div[data-js="profile-info"]');

    this.foto = ko.observable('');
    this.nome = ko.observable('');
    this.intro = ko.observable('');
    this.email = ko.observable('');
  }

  iniciar() {
    this.el.append(template);
    ko.applyBindings(this, this.el.element);

    const id = this.sandbox.seguranca.obterIdentificadorDoUsuarioLogado();

    this.sandbox.api.profileInfo.obterInformacoesPorId(id)
      .then((usuario) => {
        this.foto(usuario.caminhoDaFotoDePerfil);
        this.nome(usuario.nome);
        this.intro(usuario.intro);
        this.email(usuario.email);
      });
  }

  finalizar() {
    this.el.empty();
  }
}
