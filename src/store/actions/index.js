import { FETCH_WHISKIES } from './types';

export function fetchWhiskies() {
  return (dispatch, getState, api) => {
    return api
      .getWhiskies()
      .then(payload => {
        dispatch({
          type: FETCH_WHISKIES,
          payload,
        });
        return payload;
      })
      .catch(error => {
        throw new Error(error);
      });
  };
}
