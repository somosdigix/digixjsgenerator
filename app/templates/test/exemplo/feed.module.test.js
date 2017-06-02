import assert from 'assert';

import Sandbox from '~/base/sandbox';
import dom from '~/base-lib/dom';
import Feed from '~/controllers/exemplo/feed/feed.module';

describe('Feed', () => {
  let _feed;

  beforeEach(() => {
    dom('body').empty().append('<div data-js="feed"></div>');

    _feed = new Feed(new Sandbox());
  });

  it('Deve listagem todas as postagens', () => {
    _feed.iniciar();

    assert.equal(dom('div[data-js="feed"] section').length, 1);
  });
});
