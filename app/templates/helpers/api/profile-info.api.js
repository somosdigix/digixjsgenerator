export default class ProfileInfoApi {
  static obterInformacoesPorId(identificador) {
    // Fake, não será implementado de verdade
    const usuario = {
      nome: 'Nome 1',
      intro: 'Sou uma pessoa legal',
      email: 'a@a.com'
    };

    return new Promise((resolve) => resolve(usuario));
  }
}
