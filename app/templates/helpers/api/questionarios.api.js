import http from '../../base-lib/http';
import url from '../url';

export default class QuestionariosApi {
  static obterTodos() {
    return http.getJson(url.action('Questionario', 'ObterTodos'));
  }

  static obterPor(avaliacaoDaPrefeituraId) {
    const parametros = { avaliacaoDaPrefeituraId: avaliacaoDaPrefeituraId };

    return http.getJson(url.action('Questionario', 'ObterQuestionario'), parametros);
  }

  static preencherQuestionario(respostas, questionarioId) {
    const parametros = {
      IdDoQuestionario: questionarioId,
      Respostas: respostas.respostas
    };

    return http.post(url.action('Questionario', 'PreencherQuestionario'), parametros);
  }

  static enviarArquivo(arquivos) {
 return http.fileUpload(url.action('Questionario', 'SalvarItemAnexo'), arquivos);
  }

  static obterRespostas(questionarioId, avaliacaoDaPrefeituraId) {
    const parametros = { questionarioId: questionarioId, avaliacaoDaPrefeituraId: avaliacaoDaPrefeituraId };

    return http.getJson(url.action('Questionario', 'ObterRespostas'), parametros);
  }

  static baixarArquivo(questionarioId, guid, avaliacaoDaPrefeituraId) {
    const parametros = `questionarioId=${questionarioId}&guid=${guid}&avaliacaoDaPrefeituraId=${avaliacaoDaPrefeituraId}`;

    return http.fileDownload(url.action('Questionario', 'DownloadDoAnexo', parametros));
  }

  static logOff() {
    window.location = url.action('CodigoDeAcesso', 'LogOff');
  }
}
