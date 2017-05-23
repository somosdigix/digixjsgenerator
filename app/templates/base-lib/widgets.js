import Modal from '~/helpers/widgets/modal';
import Messages from '~/helpers/widgets/messages';
import Loading from '~/helpers/widgets/loading';
import Overlay from '~/helpers/widgets/overlay';

export default class Widgets {
  constructor() {
    this.modal = (element) => {
      return new Modal(element);
    };

    this.message = Messages;
    this.loading = Loading;

    this.overlay = (element) => {
      return new Overlay(element);
    };
  }
}
