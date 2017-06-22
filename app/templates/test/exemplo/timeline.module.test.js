import assert from 'assert';

import FakePromise from '../helpers/fakePromise';
import Sandbox from '~/base/sandbox';
import dom from '~/base-lib/dom';
import Timeline from '~/controllers/exemplo/timeline/timeline.module';

describe('Timeline', () => {
  let _sandbox, _timeline;
  
  beforeEach(() => {
    _sandbox = new Sandbox();
    _timeline = new Timeline(_sandbox);
  });
});
