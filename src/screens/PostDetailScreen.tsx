import React from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import IconBack from '@assets/back.png';
import FeedCard, {FeedItem} from '@components/organisms/FeedCard';
import {UserVotedFeedIdsItem} from '@store/reducers';
import {feedUpDownVote} from '@store/actionCreators';

function PostDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route?.params;
  const feedList = useSelector(({feeds}) => feeds);
  const userVotedFeedIdList = useSelector(
    ({userVotedFeedIds}) => userVotedFeedIds,
  );
  const dispatch = useDispatch();
  const detail = feedList.find((item: FeedItem) => item.id === id);

  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 48}}>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
            </Pressable>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                Usup Suparma
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                Mar 27, 2023
              </Text>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <FeedCard
            {...detail}
            isVoteUp={userVotedFeedIdList.find(
              (row: UserVotedFeedIdsItem) =>
                row.postId === id && row.typeVote === 'up',
            )}
            isVoteDown={userVotedFeedIdList.find(
              (row: UserVotedFeedIdsItem) =>
                row.postId === id && row.typeVote === 'down',
            )}
            isDetail
            onVote={(type: 'up' | 'down') => {
              dispatch(feedUpDownVote(id, type));
            }}
          />
        </View>
        <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        <View
          style={{
            flexDirection: 'row',
            minHeight: 72,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={36}
            height={36}
            style={{borderRadius: 24, marginRight: 16}}
          />
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 14.52,
                color: '#828282',
              }}>
              Usup Suparma
            </Text>
            <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <View
          style={{
            flexDirection: 'row',
            minHeight: 72,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={36}
            height={36}
            style={{borderRadius: 24, marginRight: 16}}
          />
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 14.52,
                color: '#828282',
              }}>
              Usup Suparma
            </Text>
            <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <View
          style={{
            flexDirection: 'row',
            minHeight: 72,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={36}
            height={36}
            style={{borderRadius: 24, marginRight: 16}}
          />
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 14.52,
                color: '#828282',
              }}>
              Usup Suparma
            </Text>
            <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput placeholder="Enter Comment" style={{flex: 1}} />
        <Button title="Comment" onPress={() => console.log('comment')} />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
