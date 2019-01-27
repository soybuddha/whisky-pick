import { FETCH_WHISKIES } from './types';

const INITIAL_STATE = {
  whiskies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WHISKIES: {
      return [
        state,
        ...action.payload.data,
      ];
    }

    default: {
      return [
        state,
      ];
    }
  }
};
