import dom from 'dom';

export default class Overlay {
  constructor(element) {
    this.element = dom(element);
  }

  show() {
    this.element.addClass('is-active');
  }

  hide() {
    this.element.removeClass('is-active');
  }
}
