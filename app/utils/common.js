import history from 'utils/history';
export const redirectToUrl = (endpoint = null) => {
  endpoint ? history.push(endpoint) : null;
};
export const request = (url, options) => {
  if (options.headers) {
    Object.assign(options.headers, { Accept: 'application/json' });
  }
  return fetch(url, {
    ...options,
    mode: 'cors',
  })
    .then(response => response.json() || response)
    .then(json => json)
    .catch(err => ({ err }));
};

export const getUrlParam = param => {
  const loc = window.location.href;
  const params = new URL(loc).searchParams;
  return params.get(param);
};
