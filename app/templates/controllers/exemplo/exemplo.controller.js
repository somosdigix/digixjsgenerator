import Sandbox from 'sandbox';
import ControllerBase from 'controllerBase';

import Feed from './feed/feed.module';
import ProfileInfo from './profile-info/profile-info.module';

export default class ExemploController extends ControllerBase {
  constructor() {
    super();

    this.modulos = [
      Feed,
      ProfileInfo
    ];
  }
}


