import {
  FETCH_WHISKIES,
  FETCH_FAVORITE_WHISKIES,
  FETCH_WHISKY_BY_ID,
  FILTER_WHISKIES_BY_TYPE,
  FILTER_WHISKIES_BY_PROFILE,
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

    case FILTER_WHISKIES_BY_TYPE: {
      return {
        ...state,
        transduced: [...action.payload],
      };
    }

    case FILTER_WHISKIES_BY_PROFILE: {
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
