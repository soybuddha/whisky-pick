import {
  FETCH_TYPES,
  FETCH_PROFILES,
} from '../actions';

const INITIAL_STATE = {
  types: [],
  profiles: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TYPES: {
      return {
        ...state,
        types: [...action.payload],
      };
    }

    case FETCH_PROFILES: {
      return {
        ...state,
        profiles: [...action.payload],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
