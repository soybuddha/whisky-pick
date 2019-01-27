import { FETCH_WHISKIES } from '../actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WHISKIES: {
      return [
        ...state,
        ...action.payload.data,
      ];
    }

    default: {
      return [
        ...state,
      ];
    }
  }
};
