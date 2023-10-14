import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  post: Post;
}

export function PostHeader({post}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={post.author.profileURL} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {post.author.userName}
      </Text>
    </Box>
  );
}
