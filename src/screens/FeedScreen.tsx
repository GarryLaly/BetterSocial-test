import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FeedCard from '@components/organisms/FeedCard';

function FeedScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <FeedCard
          authorPhoto={'https://picsum.photos/200'}
          authorName={'Usup Suparma'}
          postDate={'Mar 27, 2023'}
          postContent={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.'
          }
          postPhoto={'https://picsum.photos/200'}
          postCommentTotal={0}
          postVoteTotal={0}
          onPress={() => navigation.navigate('post-detail')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
