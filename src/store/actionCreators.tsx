import {SET_FEED_LIST, FEED_DOWN_VOTE, FEED_UP_VOTE} from './actions';
import {FeedItem} from '@components/organisms/FeedCard';

export const setFeedList = (payload: FeedItem[]) => ({
  type: SET_FEED_LIST,
  payload,
});

export const feedUpDownVote = (id: number, type: 'up' | 'down') => ({
  type: type === 'up' ? FEED_UP_VOTE : FEED_DOWN_VOTE,
  id,
});
