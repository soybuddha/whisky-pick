export const FETCH_WHISKIES = 'FETCH_WHISKIES';

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
      .catch(err => {
        throw new Error(err);
      });
  };
}

export const FETCH_WHISKY_BY_ID = 'FETCH_WHISKY_BY_ID';

export function fetchWhiskyById(id, whiskies) {
  return (dispatch, getState, api) => {
    return api
      .getWhiskyById(id, whiskies)
      .then(payload => {
        dispatch({
          type: FETCH_WHISKY_BY_ID,
          payload,
        });
        return payload;
      })
      .catch(err => {
        throw new Error(err);
      });
  };
}
