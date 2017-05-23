import dom from 'dom';

export default class Modal {
  constructor(element) {
    this.element = dom(element);
  }

  open() {
    this.element.addClass('is-active');
  }

  openWithMessage(menssage) {
      var corpoDaMensagem = this.element.getChildren('.modal-card > .modal-card-body > [name="mensagemPersonalizada"]')[0];
      dom(corpoDaMensagem).append(menssage);
      this.element.addClass('is-active');
  }

  close() {
    this.element.removeClass('is-active');
  }
}
