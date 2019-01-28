import {
  FETCH_TASTERS,
  FETCH_TASTER_BY_ID,
  FETCH_TASTER_WHISKIES_BY_ID,
} from '../actions';

const INITIAL_STATE = {
  all: [],
  selected: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASTERS: {
      return {
        ...state,
        all: [...action.payload.data],
      };
    }

    case FETCH_TASTER_BY_ID: {
      return {
        ...state,
        selected: action.payload,
      };
    }

    case FETCH_TASTER_WHISKIES_BY_ID: {
      return {
        ...state,
        selected: {
          ...state.selected,
          whiskies: action.payload,
        },
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
