import reqwest from 'reqwest';
import Promise from 'Promise';
import Widgets from './widgets';

export default class Http {
  static getJson(url, parameters) {
    return new Promise((resolve, reject) => {
      const done = _createDoneHandler(resolve);
      const fail = _createFailHandler(reject);

      reqwest({
        url: url,
        type: 'json',
        method: 'GET',
        contentType: 'application/json',
        data: parameters,
        success: done,
        error: fail
      });
    });
  }

  static post(url, parameters) {
    return new Promise((resolve, reject) => {
      const done = _createDoneHandler(resolve);
      const fail = _createFailHandler(reject);

      reqwest({
        url: url,
        type: 'json',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(parameters),
        success: done,
        error: fail
      });
    });
  }

  static fileUpload(url, files) {
    return new Promise((resolve, reject) => {
      const done = _createDoneHandler(resolve);
      const fail = _createFailHandler(reject);

      let formData = new FormData();

      for (var i = 0; i < files.length; i++)
        formData.append(files[i].name, files[i]);

      reqwest({
        type: 'json',
        method: 'POST',
        url: url,
        data: formData,
        contentType: false,
        processData: false,
        success: done,
        error: fail
      });
    });
  }

  static fileDownload(url) {
    window.location = url;
  }
}

const _createDoneHandler = (resolve) => {
  return (response) => {
    if (response.excecoes) {
      new Widgets().message.erro(response.excecoes);
      return;
    }

    resolve(response);
  };
};

const _createFailHandler = (reject) => {
  return (error) => reject(error);
};
