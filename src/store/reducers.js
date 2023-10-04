import {SET_FEED_LIST} from './actions';

// Contains authenticated user data
export const feeds = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_FEED_LIST:
      return payload;

    default:
      return state;
  }
};
