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

export const FETCH_TASTERS = 'FETCH_TASTERS';

export function fetchTasters() {
  return (dispatch, getState, api) => {
    return api
      .getTasters()
      .then(payload => {
        dispatch({
          type: FETCH_TASTERS,
          payload,
        });
        return payload;
      })
      .catch(err => {
        throw new Error(err);
      });
  };
}

export const FETCH_TASTER_BY_ID = 'FETCH_TASTER_BY_ID';

export function fetchTasterById(id, tasters) {
  return (dispatch, getState, api) => {
    return api
      .getTasterById(id, tasters)
      .then(payload => {
        dispatch({
          type: FETCH_TASTER_BY_ID,
          payload,
        });
        return payload;
      })
      .catch(err => {
        throw new Error(err);
      });
  };
}

export const FETCH_TASTER_WHISKIES_BY_ID = 'FETCH_TASTER_WHISKIES_BY_ID';

export function fetchTasterWhiskiesById(id, whiskies) {
  return (dispatch, getState, api) => {
    return api
      .getTasterWhiskiesById(id, whiskies)
      .then(payload => {
        dispatch({
          type: FETCH_TASTER_WHISKIES_BY_ID,
          payload,
        });
        return payload;
      })
      .catch(err => {
        throw new Error(err);
      });
  };
}
