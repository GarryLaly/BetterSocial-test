import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';

import FeedCard, {FeedItem} from '@components/organisms/FeedCard';
import {feedUpDownVote} from '@store/actionCreators';
import {UserVotedFeedIdsItem} from '@store/reducers';

function FeedScreen() {
  const feedList = useSelector(({feeds}) => feeds);
  const dispatch = useDispatch();
  const userVotedFeedIdList = useSelector(
    ({userVotedFeedIds}) => userVotedFeedIds,
  );
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{minHeight: 2, minWidth: 2, flex: 1}}>
        <FlashList
          data={feedList}
          renderItem={({item}: {item: FeedItem}) => (
            <FeedCard
              {...item}
              isVoteUp={userVotedFeedIdList.find(
                (row: UserVotedFeedIdsItem) =>
                  row.postId === item.id && row.typeVote === 'up',
              )}
              isVoteDown={userVotedFeedIdList.find(
                (row: UserVotedFeedIdsItem) =>
                  row.postId === item.id && row.typeVote === 'down',
              )}
              onPress={() => navigation.navigate('post-detail', {id: item.id})}
              onVote={(type: 'up' | 'down') => {
                dispatch(feedUpDownVote(item.id, type));
              }}
            />
          )}
          estimatedItemSize={200}
        />
      </View>
    </SafeAreaView>
  );
}

export default FeedScreen;
