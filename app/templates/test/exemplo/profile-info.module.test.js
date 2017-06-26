import expect from 'expect.js';

import FakePromise from '../helpers/fakePromise';
import Sandbox from '~/base/sandbox';
import dom from '~/base-lib/dom';
import ProfileInfo from '~/controllers/exemplo/profile-info/profile-info.module';

describe('Profile info', () => {
  let _sandbox, _profileInfo, _usuarioLogado;
  
  beforeEach(() => {
    dom('body').append('<div data-js="profile-info"></div>');

    _usuarioLogado = {
      nome: 'Nome 1',
      intro: 'Sou uma pessoa legal',
      email: 'a@a.com',
      caminhoDaFotoDePerfil: 'http://www.google.com.br/my-photo.png'
    };

    _sandbox = new Sandbox();
    _sandbox.api.profileInfo.obterInformacoesPorId = () => new FakePromise(_usuarioLogado);

    _profileInfo = new ProfileInfo(_sandbox);
  });

  afterEach(() => {
    _profileInfo.finalizar();
    dom('div[data-js="profile-info"]').remove();
  });

  it('deve exibir imagem vazia de perfil, se não houver', () => {
    _usuarioLogado.caminhoDaFotoDePerfil = '';
    _sandbox.api.profileInfo.obterInformacoesPorId = () => new FakePromise(_usuarioLogado);

    _profileInfo.iniciar();

    expect(dom('img').getAttr('src')).to.contain('no-photo.png');
  });

  it('deve exibir imagem de perfil do usuário logado', () => {
    _profileInfo.iniciar();

    expect(dom('img').getAttr('src')).to.contain('my-photo.png');
  });

  it('deve exibir o nome do usuário logado', () => {
    _profileInfo.iniciar();

    expect(dom('h1').getHtml()).to.be.equal('Nome 1');
  });

  it('deve exibir a intro do usuário logado', () => {
    _profileInfo.iniciar();

    expect(dom('p').getHtml()).to.be.equal('Sou uma pessoa legal');
  });

  it('deve exibir o email do usuário logado', () => {
    _profileInfo.iniciar();

    expect(dom('span').getHtml()).to.be.equal('a@a.com');
  });

  it('deve limpar o conteúdo do elemento alvo ao finalizar', () => {
    _profileInfo.iniciar();

    _profileInfo.finalizar();

    expect(dom('div[data-js="profile-info"]').getHtml()).to.be.empty();
  });
});
