import { FETCH_WHISKIES } from '../actions/types';

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
