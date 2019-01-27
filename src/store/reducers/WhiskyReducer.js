import { FETCH_WHISKIES, FETCH_WHISKY_BY_ID } from '../actions';

const INITIAL_STATE = {
  all: [],
  selected: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WHISKIES: {
      return {
        ...state,
        all: [...action.payload.data],
      };
    }

    case FETCH_WHISKY_BY_ID: {
      return {
        ...state,
        selected: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
