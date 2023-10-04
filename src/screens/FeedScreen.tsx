import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';

import FeedCard, {FeedItem} from '@components/organisms/FeedCard';
import {feedUpDownVote} from '@store/actionCreators';

function FeedScreen() {
  const feedList = useSelector(({feeds}) => feeds);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{minHeight: 2, minWidth: 2, flex: 1}}>
        <FlashList
          data={feedList}
          renderItem={({item}: {item: FeedItem}) => (
            <FeedCard
              {...item}
              onPress={() => navigation.navigate('post-detail')}
              onVote={(id: number, type: 'up' | 'down') => {
                dispatch(feedUpDownVote(id, type));
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
