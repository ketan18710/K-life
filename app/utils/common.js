import history from 'utils/history';
export const redirectToUrl = (endpoint = null) => {
  endpoint ? history.push(endpoint) : null;
}
