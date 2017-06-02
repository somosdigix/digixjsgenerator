import assert from 'assert';

import Sandbox from '~/base/sandbox';
import dom from '~/base-lib/dom';
import Feed from '~/controllers/exemplo/feed/feed.module';

let _feed;

describe('Feed', () => {
  it('Deve listagem todas as postagens', () => {
    _feed = new Feed(new Sandbox());
    document.body.innerHTML = '<div data-js="feed"></div>';

    _feed.iniciar();

    assert.equal(dom('div[data-js="feed"] section').length, 1);
  });
});
