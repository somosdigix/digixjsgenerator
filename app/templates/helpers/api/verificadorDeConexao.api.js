import http from '../../base-lib/http';
import url from '../url';

export default class VerificadorDeConexao {
  static verificar() {
    return http.getJson(url.action('VerificadorDeConexao', 'Verificar'));
  }
}
