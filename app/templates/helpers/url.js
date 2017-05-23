export default {
  action: (controller, action, queryString) => {
    const rootUrl = window.rootUrl;
    const parametros = queryString ? `?${queryString}` : '';

    return action ?
      `${rootUrl}${controller}/${action}${parametros}` :
      `${rootUrl}${controller}${parametros}`;
  }
 };
