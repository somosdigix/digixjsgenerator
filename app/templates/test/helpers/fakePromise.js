export default class FakePromise {
  constructor(dadosParaResolver, dadosParaRejeitar) {
    this.then = function(resolver) {
      resolver(dadosParaResolver);
    };

    this.catch = function(rejeitar) {
      rejeitar(dadosParaRejeitar);
    };
  }
}
