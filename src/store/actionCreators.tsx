import {SET_FEED_LIST} from './actions';
import {FeedItem} from '@components/organisms/FeedCard';

export const setFeedList = (payload: FeedItem[]) => ({
  type: SET_FEED_LIST,
  payload,
});
