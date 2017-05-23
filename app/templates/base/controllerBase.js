import Sandbox from './sandbox';

export default class ControllerBase {
  constructor() {
    this.instancias = [];
  }

  iniciar() {
    const sandbox = new Sandbox();

    this.instancias = this.modulos.map((Modulo) => new Modulo(sandbox));
    this.instancias.forEach((modulo) => modulo.iniciar());
  }

  finalizar() {
    this.instancias.forEach((modulo) => modulo.finalizar());
  }
}
