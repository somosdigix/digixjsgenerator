import dom from '~/base-lib/dom';
import template from './loading.template.html';

export default class Loading {
  static exibir(seletorParaExibicao) {
    if (dom(`${seletorParaExibicao} article[data-js="loading"]`).any())
      return;

    dom(seletorParaExibicao).prepend(`${template}${dom(seletorParaExibicao).element.innerHTML}`);
  }

  static esconder(seletorParaExibicao) {
    dom(`${seletorParaExibicao} article[data-js="loading"]`).hide();
  }
}
