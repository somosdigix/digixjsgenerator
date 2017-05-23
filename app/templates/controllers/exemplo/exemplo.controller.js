import Sandbox from 'sandbox';
import ControllerBase from 'controllerBase';

import Feed from './feed/feed.module';
import Timeline from './timeline/timeline.module';

export default class PaginaInicial extends ControllerBase {
  constructor() {
    super();

    this.modulos = [
      Feed,
      Timeline
    ];
  }
}

new PaginaInicial().iniciar();
