import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

interface Props {
  post: Post;
}

export function PostHeader({post}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{uri: post.author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 14}}
      />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {post.author.userName}
      </Text>
    </Box>
  );
}
