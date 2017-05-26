import test from 'ava';
import Feed from '../../controllers/exemplo/feed/feed.module';

let _feed;

test.beforeEach(t => {
  _feed = new Feed();
  document.body.innerHTML = '<span></span>';
});

test('Passando', t => {
  const span = document.querySelector('span');

  _feed.iniciar();
  
  t.is(span.innerHTML, 'Oi');
});
