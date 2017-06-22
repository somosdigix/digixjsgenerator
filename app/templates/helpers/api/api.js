import FeedApi from './feed.api';
import TimelineApi from './timeline.api';

export default class Api {
  constructor() {
    this.feed = FeedApi;
    this.timeline = TimelineApi;
  }
}
