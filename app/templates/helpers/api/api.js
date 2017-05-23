import PrefeiturasApi from './prefeituras.api';
import AvaliacoesDasPrefeiturasApi from './avaliacoesDasPrefeituras.api';
import QuestionariosApi from './questionarios.api';
import VerificadorDeConexaoApi from './verificadorDeConexao.api';

export default class Api {
  constructor() {
    this.prefeituras = PrefeiturasApi;
    this.avaliacoesDasPrefeituras = AvaliacoesDasPrefeiturasApi;
    this.questionarios = QuestionariosApi;
    this.verificadorDeConexao = VerificadorDeConexaoApi;
  }
}
