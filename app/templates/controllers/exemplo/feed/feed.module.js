import ko from 'knockout';
import template from './feed.template.html';

export default class Feed {
  constructor(sandbox) {
    this.sandbox = sandbox;
    this.el = this.sandbox.dom('div[data-js="feed"]');

    this.postagens = ko.observableArray([]);
  }

  iniciar() {
    this.el.append(template);
    ko.applyBindings(this, this.el.element);

    this.sandbox.api.feed.obterTodos().then((feeds) => this.postagens(feeds));
  }

  finalizar() {
    this.el.empty();
  }
}
