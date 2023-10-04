import {
  SET_FEED_LIST,
  FEED_DOWN_VOTE,
  FEED_UP_VOTE,
  SET_USER_VOTED_FEED_IDS,
  SET_USER_UNVOTED_FEED_ID,
} from './actions';
import {FeedItem} from '@components/organisms/FeedCard';

export type UserVotedFeedIdsItem = {
  postId: number;
  userId: number;
  typeVote: 'up' | 'down';
};

export type RootState = {
  feeds: FeedItem[];
  userVotedFeedIds: UserVotedFeedIdsItem[];
};

// Contains authenticated user data
export const feeds = (
  state: FeedItem[] = [
    {
      id: 1,
      authorPhoto: 'https://picsum.photos/200',
      authorName: 'Usup Suparma',
      postDate: 'Mar 27, 2023',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      postPhoto: 'https://picsum.photos/200',
      postCommentTotal: 0,
      postVoteTotal: 0,
    },
    {
      id: 2,
      authorPhoto: 'https://picsum.photos/200',
      authorName: 'Garry Priambudi',
      postDate: 'Mar 26, 2023',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      postPhoto: 'https://picsum.photos/200',
      postCommentTotal: 0,
      postVoteTotal: 0,
    },
    {
      id: 3,
      authorPhoto: 'https://picsum.photos/200',
      authorName: 'Budi Santoso',
      postDate: 'Mar 25, 2023',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      postPhoto: 'https://picsum.photos/200',
      postCommentTotal: 0,
      postVoteTotal: 0,
    },
  ],
  action: any,
) => {
  const {type, payload, id} = action;

  switch (type) {
    case SET_FEED_LIST:
      return payload;

    case FEED_UP_VOTE:
      return state.map((item: FeedItem) => {
        if (item.id === id) {
          return {...item, postVoteTotal: item.postVoteTotal + 1};
        }
        return item;
      });

    case FEED_DOWN_VOTE:
      return state.map((item: FeedItem) => {
        if (item.id === id) {
          return {
            ...item,
            postVoteTotal: item.postVoteTotal - 1,
          };
        }
        return item;
      });

    default:
      return state;
  }
};

export const userVotedFeedIds = (
  state: UserVotedFeedIdsItem[] = [],
  action: any,
) => {
  const {type, postId, userId, typeVote, indexUnvote} = action;

  switch (type) {
    case SET_USER_VOTED_FEED_IDS:
      const checkExistVoteIndex = state.findIndex(
        (item: UserVotedFeedIdsItem) =>
          item.postId === postId && item.userId === userId,
      );
      const newState = state.map((item: UserVotedFeedIdsItem) => {
        if (item.postId === postId && item.userId === userId) {
          // change typeVote if exist
          return {...item, typeVote};
        }
        return item;
      });
      if (checkExistVoteIndex < 0) {
        // if not exist then pust it to array
        newState.push({postId, userId, typeVote});
      }
      return newState;

    case SET_USER_UNVOTED_FEED_ID:
      const newStateUnvote = state;
      newStateUnvote.splice(indexUnvote, 1);
      return newStateUnvote;

    default:
      return state;
  }
};
