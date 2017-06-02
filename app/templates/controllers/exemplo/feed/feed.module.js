import ko from 'knockout';
import template from './feed.template.html';

export default class Feed {
  constructor(sandbox) {
    this.el = sandbox.dom('div[data-js="feed"]');
    this.sandbox = sandbox;

    this.postagens = ko.observableArray([]);
  }

  iniciar() {
    this.el.append(template);
  }

  finalizar() {
    this.el.empty();
  }
}
