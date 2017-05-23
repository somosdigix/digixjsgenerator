import dot from 'dot';

export default class Template {
  static compilar(template, viewModel) {
    let templateCompilado = dot.template(template);
    return templateCompilado(viewModel);
  }
}
