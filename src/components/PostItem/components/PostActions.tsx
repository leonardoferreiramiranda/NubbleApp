import React from 'react';

import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

interface Props {
  post: Post;
  hideCommentAction?: boolean;
}

export function PostActions({post, hideCommentAction}: Props) {
  const navigation = useNavigation();
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={likeReaction.hasReacted}
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likeReaction.reactToPost}
        text={likeReaction.reactionCount}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={post.commentCount}
      />
      <Item
        marked={favoriteReaction.hasReacted}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={favoriteReaction.reactToPost}
        text={favoriteReaction.reactionCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked: boolean;
  disabled?: boolean;
}

function Item({onPress, icon, text, marked, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      mr="s24"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={text > 0 && marked ? 'market' : undefined}
        name={text > 0 && marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
