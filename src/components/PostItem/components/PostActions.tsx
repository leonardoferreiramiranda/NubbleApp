import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

interface Props {
  post: Post;
}

export function PostActions({post}: Props) {
  function likePost() {
    //TODO:
  }
  function navigateToComments() {
    //TODO:
  }
  function favoritePost() {
    //TODO:
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={post.reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={post.commentCount}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={post.favoriteCount}
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
}

function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
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
