import {Dispatch} from 'redux';
import {
  SET_FEED_LIST,
  FEED_DOWN_VOTE,
  FEED_UP_VOTE,
  SET_USER_VOTED_FEED_IDS,
  SET_USER_UNVOTED_FEED_ID,
} from './actions';
import {FeedItem} from '@components/organisms/FeedCard';
import {RootState, UserVotedFeedIdsItem} from './reducers';

export const setFeedList = (payload: FeedItem[]) => ({
  type: SET_FEED_LIST,
  payload,
});

export const feedUpDownVote = (id: number, type: 'up' | 'down') => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const userVotedFeedIds = getState().userVotedFeedIds;
    const checkExistVoteIndex = userVotedFeedIds.findIndex(
      (item: UserVotedFeedIdsItem) =>
        item.postId === id && item.userId === 1 && item.typeVote === type,
    );
    dispatch(setUserVotedFeedIds(id, 1, type));
    if (checkExistVoteIndex < 0) {
      // not exist then vote it
      return dispatch({
        type: type === 'up' ? FEED_UP_VOTE : FEED_DOWN_VOTE,
        id,
      });
    } else {
      const checkExistUnvoteIndex = userVotedFeedIds.findIndex(
        (item: UserVotedFeedIdsItem) =>
          item.postId === id && item.userId === 1 && item.typeVote === type,
      );
      if (checkExistUnvoteIndex > -1) {
        // exist then unvote
        dispatch(setUserUnvotedFeedId(checkExistUnvoteIndex));
        return dispatch({
          type:
            userVotedFeedIds[checkExistUnvoteIndex].typeVote === 'up'
              ? FEED_DOWN_VOTE
              : FEED_UP_VOTE,
          id,
        });
      } else {
        return {};
      }
    }
  };
};

export const setUserVotedFeedIds = (
  postId: number,
  userId: number,
  typeVote: 'up' | 'down',
) => ({
  type: SET_USER_VOTED_FEED_IDS,
  postId,
  userId,
  typeVote,
});

export const setUserUnvotedFeedId = (indexUnvoted: number) => ({
  type: SET_USER_UNVOTED_FEED_ID,
  indexUnvoted,
});
