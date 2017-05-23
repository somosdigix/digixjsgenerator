import http from '../../base-lib/http';
import url from '../url';

export default class PrefeiturasApi {
  static obterTodas() {
    return http.getJson(url.action('Prefeituras', 'ObterTodas'));
  }

  static obterPrefeiturasComAvaliacoes() {
    return http.getJson(url.action('AvaliacoesDasPrefeituras', 'ObterTodas'));
  }
}
