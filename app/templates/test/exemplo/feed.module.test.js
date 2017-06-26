import expect from 'expect.js';

import FakePromise from '../helpers/fakePromise';
import Sandbox from '~/base/sandbox';
import dom from '~/base-lib/dom';
import Feed from '~/controllers/exemplo/feed/feed.module';

describe('Feed', () => {
  let _sandbox, _feed;
  
  beforeEach(() => {
    dom('body').empty().append('<div data-js="feed"></div>');

    _sandbox = new Sandbox();
    _feed = new Feed(_sandbox);
  });

  afterEach(() => {
    _feed.finalizar();
    dom('div[data-js="feed"]').remove();
  });

  it('deve listar as postagens', () => {
    const feeds = [
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
    _sandbox.api.feed.obterTodos = () => new FakePromise(feeds);

    _feed.iniciar();

    expect(dom('div[data-id="1"]').any()).to.be.ok();
    expect(dom('div[data-id="2"]').any()).to.be.ok();
  });

  it('deve exibir um feedback quando não há postagens a serem exibidas');
});
