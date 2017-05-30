export default class Feed {
  constructor(sandbox) {
    this.sandbox = sandbox;
  }

  iniciar() {
    document.querySelector('span').innerHTML = 'Oi';
  }

  finalizar() {
    document.querySelector('span').innerHTML = '';
  }
}
