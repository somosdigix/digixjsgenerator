class DomElement {
  constructor(elements) {
    this.elements = Array.from(elements);
    this.element = this.elements[0];
    this.itsJustOneElement = elements.length === 1;
  }

  get length() {
    return this.elements.length;
  }

  any() {
    return this.length > 0;
  }

  _map(callback) {
    const mappedContent = this.elements.map(callback);

    return this.itsJustOneElement ? mappedContent[0] : mappedContent;
  }

  forEach(callback) {
    this.elements.forEach(element => callback.apply(this, [element]));
  }

  getAttr(attrName) {
    return this._map((element) => element.getAttribute(attrName));
  }

  getData(dataName) {
    return this._map((element) => element.getAttribute(`data-${dataName}`));
  }

  getHtml() {
    return this._map((element) => element.innerHTML);
  }

  getFiles() {
    return this._map((element) => element.files);
  }

  getValue() {
    return this._map((element) => element.value);
  }

  value(newValue) {
    this.elements.forEach((element) => element.value = newValue);
    return this;
  }

  //TODO: Rever performance
  prepend(content) {
    this.elements.forEach((element) => element.innerHTML = content + element.innerHTML);
    return this;
  }

  append(content) {
    this.elements.forEach((element) => element.innerHTML += content);
    return this;
  }

  empty() {
    this.elements.forEach((element) => element.innerHTML = '');
    return this;
  }

  addClass(...classes) {
    this.elements.forEach((element) => element.classList.add(...classes));
    return this;
  }

  removeClass(...classes) {
    this.elements.forEach((element) => element.classList.remove(...classes));
    return this;
  }

  disabled(parameter) {
    if(parameter)
      this.elements.forEach((element) => element.setAttribute("disabled", "disabled"));
    else
      this.elements.forEach((element) => element.removeAttribute("disabled"));
  }

  //TODO: Testar
  hasClass(...classes) {
    return this.element.classList.contains(...classes);
  }

  focus() {
    this.element.focus();
    return this;
  }

  check() {
    this.elements.forEach((element) => element.checked = true);
    return this;
  }

  //TODO: Testar
  uncheck() {
    this.elements.forEach((element) => element.checked = false);
    return this;
  }

  show() {
    this.elements.forEach((element) => element.style.display = '');
    return this;
  }

  hide() {
    this.elements.forEach((element) => element.style.display = 'none');
    return this;
  }

  remove() {
    if(this.element)
      this.element.remove();
  }

  getPositionTop() {
    return this.element.offsetTop;
  }

  event(eventName, target, handler) {
    this.element.addEventListener(eventName, (event) => {
      const element = event.target;
      const isTheSameType = element.matches(target);

      if (isTheSameType)
        handler.apply(this, [element, event]);
    }, false);

    return this;
  }

  // TODO: Test?
  directEvent(eventName, handler) {
    const element = this.element;

    this.element.addEventListener(eventName, () => {
      handler.apply(this, [element]);
    });

    return this;
  }

  trigger(eventName) {
    this.elements.forEach((element) => {
      let event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);

      element.dispatchEvent(event);
    });

    return this;
  }

  findParent(selector) {
    const _findParent = (element, selector) => {
      const parent = element.parentNode;

      if (parent !== document && parent) {
        if (parent.matches(selector))
          return Dom.select(parent);
        else
          return _findParent(parent, selector);
      }
    };

    return _findParent(this.element, selector);
  }

  //TODO: Testar
  getSiblings(selector) {
    var siblings = [];
    let parent = this.element.parentNode.firstChild;
    do {
        if (parent.nodeType === 3) continue;
        if (parent.outerHTML == document.querySelector(selector).outerHTML)
          siblings.push(parent);
    } while (parent = parent.nextSibling);

    return siblings;
  }

  //TODO: Testar
  getChildren(selector) {
    let count = 0;
    var id = this.element.id,
    guid = this.element.id = id || 'query_children_' + count++,
    attr = '#' + guid + ' > ',
    selector = attr + (selector + '').replace(',', ',' + attr, 'g');
    var result = this.element.parentNode.querySelectorAll(selector);
    if (!id) this.element.removeAttribute('id');
      return result;
  }
}

class Dom {
  static select(selector) {
    let element;
    const isSelector = typeof(selector) === 'string';
    const isNotHtmlElement = !(selector instanceof window.HTMLElement);

    if (isSelector)
      element = document.querySelectorAll(selector);
    else
        element = [selector];

    return new DomElement(element);
  }
}

module.exports = (selector) => {
  return Dom.select(selector);
};
