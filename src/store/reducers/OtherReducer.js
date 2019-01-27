import { FETCH_OTHER } from '../actions/types';

const INITIAL_STATE = {
  other: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_OTHER: {
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
