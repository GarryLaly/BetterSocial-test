import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import IconBlock from '@assets/block.png';
import IconComment from '@assets/comment.png';
import IconDownvoteActive from '@assets/downvote_active.png';
import IconUpvoteActive from '@assets/upvote_active.png';
import IconDownvoteInactive from '@assets/downvote_inactive.png';
import IconUpvoteInactive from '@assets/upvote_inactive.png';
import IconShare from '@assets/share.png';

export type FeedItem = {
  id: number;
  authorPhoto: string;
  authorName: string;
  postDate: string;
  postContent: string;
  postPhoto?: string;
  postCommentTotal: number;
  postVoteTotal: number;
};

export interface FeedCardProps extends FeedItem {
  isVoteUp: boolean;
  isVoteDown: boolean;
  isDetail?: boolean;
  onPress: () => void;
  onVote: (type: 'up' | 'down') => void;
}

const FeedCard = ({
  authorPhoto,
  authorName,
  postDate,
  postContent,
  postPhoto,
  postCommentTotal,
  postVoteTotal,
  isVoteDown,
  isVoteUp,
  isDetail,
  onPress,
  onVote,
}: FeedCardProps) => (
  <Pressable onPress={!isDetail ? () => onPress() : null}>
    <View>
      {!isDetail && (
        <View
          style={{
            height: 64,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: authorPhoto,
            }}
            width={48}
            height={48}
            style={{borderRadius: 24, marginLeft: 24}}
          />
          <View style={{marginLeft: 16}}>
            <Text style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
              {authorName}
            </Text>
            <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
              {postDate}
            </Text>
          </View>
        </View>
      )}
      <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
      <View>
        {isDetail ? (
          <View style={{margin: 24}}>
            <Text>{postContent}</Text>
          </View>
        ) : (
          <View style={{margin: 24}}>
            <Text numberOfLines={3} ellipsizeMode="tail">
              {postContent}
            </Text>
            <Text style={{color: '#2980b9', fontWeight: 'bold'}}>More</Text>
          </View>
        )}
        {postPhoto && (
          <Image
            source={{
              uri: postPhoto,
            }}
            height={200}
          />
        )}
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
            {postCommentTotal}
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
          <Pressable onPress={() => onVote('down')}>
            <Image
              source={isVoteDown ? IconDownvoteActive : IconDownvoteInactive}
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
            {postVoteTotal}
          </Text>
          <Pressable onPress={() => onVote('up')}>
            <Image
              source={isVoteUp ? IconUpvoteActive : IconUpvoteInactive}
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
);

export default FeedCard;
