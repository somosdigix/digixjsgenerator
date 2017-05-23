import dom from 'dom';
import vanillaMasker from 'vanilla-masker';

const _mascaras = {
  'data': '99/99/9999'
};

export default class Mascaras {
  static aplicar() {
    Mascaras.destruir();

    dom('input[data-mascara]').forEach(elemento => {
      const formato = dom(elemento).getData('mascara');

      if (formato === 'dinheiro') {
        vanillaMasker(elemento).maskMoney({
          precision: 2,
          separator: ',',
          delimiter: '.'
        });
      }
      else {
        const mascara = _mascaras[formato];
        vanillaMasker(elemento).maskPattern(mascara);
      }
    });
  }

  static destruir() {
    dom('input[data-mascara]').forEach(elemento => {
      vanillaMasker(elemento).unMask();
    });
  }
}
