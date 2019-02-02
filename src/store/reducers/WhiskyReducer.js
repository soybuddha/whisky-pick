import {
  FETCH_WHISKIES,
  FETCH_WHISKY_BY_ID,
  FETCH_FAVORITE_WHISKIES,
} from '../actions';

const INITIAL_STATE = {
  all: [],
  selected: {},
  favorites: {},
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

    case FETCH_FAVORITE_WHISKIES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
