import {
  FETCH_WHISKIES,
  FETCH_FAVORITE_WHISKIES,
  FETCH_WHISKY_BY_ID,
  FILTER_WHISKIES,
  SEARCH_MATCHED_WHISKIES,
} from '../actions';

const INITIAL_STATE = {
  all: [],
  favorites: {},
  transduced: [],
  selected: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WHISKIES: {
      return {
        ...state,
        all: [...action.payload],
        transduced: [...action.payload],
      };
    }

    case FETCH_FAVORITE_WHISKIES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }

    case FETCH_WHISKY_BY_ID: {
      return {
        ...state,
        selected: action.payload,
      };
    }

    case FILTER_WHISKIES: {
      return {
        ...state,
        transduced: [...action.payload],
      };
    }

    case SEARCH_MATCHED_WHISKIES: {
      return {
        ...state,
        transduced: [...action.payload],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
