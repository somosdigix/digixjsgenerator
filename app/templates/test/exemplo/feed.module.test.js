import expect from 'expect.js';

import FakePromise from '../helpers/fakePromise';
import Sandbox from '~/base/sandbox';
import dom from '~/base-lib/dom';
import Feed from '~/controllers/exemplo/feed/feed.module';

describe('Feed', () => {
  let _sandbox, _feed, _feeds;
  
  beforeEach(() => {
    dom('body').empty().append('<div data-js="feed"></div>');

    _feeds = [
      {
        id: 1,
        nome: 'Feed 1',
        mensagem: 'Mensagem 1'
      },
      {
        id: 2,
        nome: 'Feed 2',
        mensagem: 'Mensagem 2'
      }
    ];

    _sandbox = new Sandbox();
    _sandbox.api.feed.obterTodos = () => new FakePromise(_feeds);

    _feed = new Feed(_sandbox);
  });

  afterEach(() => {
    _feed.finalizar();
    dom('div[data-js="feed"]').remove();
  });

  it('deve listar as postagens', () => {
    _feed.iniciar();

    expect(dom('div[data-id="1"]').any()).to.be.ok();
    expect(dom('div[data-id="2"]').any()).to.be.ok();
  });

  it('deve exibir um feedback quando não há postagens a serem exibidas', () => {
    _sandbox.api.feed.obterTodos = () => new FakePromise([]);

    _feed.iniciar();

    expect(dom('p').hasClass('esconder')).to.be.ok();
  });

  it('não deve exibir um feedback quando houver postagens a serem exibidas', () => {
    _feed.iniciar();

    expect(dom('p').hasClass('esconder')).not.to.be.ok();
  });

  it('deve limpar o conteúdo do elemento alvo ao finalizar', () => {
    _feed.iniciar();

    _feed.finalizar();

    expect(dom('div[data-js="feed"]').getHtml()).to.be.empty();
  });
});
