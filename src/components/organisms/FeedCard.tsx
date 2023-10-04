import React from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import IconDownvoteActive from '@assets/downvote_active.png';
import IconUpvoteActive from '@assets/upvote_active.png';

const FeedCard = ({onPress}) => (
  <Pressable onPress={onPress}>
          <View style={{height: 547}}>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
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
            <View>
              <Text style={{margin: 24}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
                consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
                Integer et nunc ut tellus tinci, consectetur adipiscing elit.
                Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci
                Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus
                tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac
                dictum.
              </Text>
              <Image
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Pressable onPress={() => console.log('downvote')}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={{marginLeft: 24}}
                  />
                </Pressable>
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
                <Pressable onPress={() => console.log('upvote')}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={{marginRight: 22}}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        </Pressable>
)

export default FeedCard;