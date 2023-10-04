import {SET_FEED_LIST} from './actions';
import {FeedItem} from '@components/organisms/FeedCard';

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
  const {type, payload} = action;

  switch (type) {
    case SET_FEED_LIST:
      return payload;

    default:
      return state;
  }
};