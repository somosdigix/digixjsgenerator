import Mediador from './mediador';
import Dom from '~/base-lib/dom';
import Http from '~/base-lib/http';
import Api from '~/helpers/api/api';
import Widgets from '~/base-lib/widgets';
import Mascaras from '~/base-lib/mascaras';
import Guid from '~/base-lib/guid';
import Redirect from '~/base-lib/redirect';
import Seguranca from '~/base-lib/seguranca';

export default class Sandbox {
  constructor() {
    this.mediador = new Mediador();
    this.dom = Dom;
    this.http = Http;
    this.api = new Api();
    this.widgets = new Widgets();
    this.mascaras = Mascaras;
    this.guid = Guid;
    this.redirect = Redirect;
    this.seguranca = Seguranca;
  }
}
