import FeedApi from './feed.api';
import ProfileInfoApi from './profile-info.api';

export default class Api {
  constructor() {
    this.feed = FeedApi;
    this.profileInfo = ProfileInfoApi;
  }
}
