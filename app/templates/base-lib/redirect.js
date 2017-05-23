import url from '../helpers/url';

export default class Redirect {
  static toAction(controller, action, queryString) {
    window.location = url.action(controller, action, queryString);
  }
}
