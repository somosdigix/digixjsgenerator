import toastr from 'toastr';

toastr.options.closeButton = true;

export default class Messages {
  static sucesso(message) {
    Messages.esconderTodas();
    toastr.success(message);
  }

  static info(message) {
    Messages.esconderTodas();
    toastr.info(message);
  }

  static erro(message) {
    Messages.esconderTodas();
    toastr.error(message);
     throw 'Erro';
  }

  static esconderTodas() {
    toastr.clear();
  }
}
