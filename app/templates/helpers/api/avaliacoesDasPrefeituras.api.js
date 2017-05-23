import http from '../../base-lib/http';
import url from '../url';

export default class AvaliacoesDasPrefeiturasApi {
  static obterTodas() {
    return http.getJson(url.action('AvaliacoesDasPrefeituras', 'ObterTodas'));
  }

  static obterPorPrefeitura(idDaPrefeitura) {
    const parametros = { idDaPrefeitura: idDaPrefeitura };

    return http.getJson(url.action('AvaliacoesDasPrefeituras', 'ObterPorPrefeitura'), parametros);
  }

  static criar(idDaPrefeitura, idDoQuestionario) {
    const parametros = {
      idDaPrefeitura: idDaPrefeitura,
      idDoQuestionario: idDoQuestionario
    };

    return http.post(url.action('AvaliacoesDasPrefeituras', 'Criar'), parametros);
  }

  static obterDetalhes(idDaAvaliacao) {
    const parametros = { idDaAvaliacao: idDaAvaliacao };

    return http.getJson(url.action('AvaliacoesDasPrefeituras', 'Detalhar'), parametros);
  }
}
