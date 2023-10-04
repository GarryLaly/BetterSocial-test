import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

import FeedCard, {FeedItem} from '@components/organisms/FeedCard';
import {useSelector} from 'react-redux';

function FeedScreen() {
  const feedList = useSelector(({feeds}) => feeds);
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
            />
          )}
          estimatedItemSize={200}
        />
      </View>
    </SafeAreaView>
  );
}

export default FeedScreen;
