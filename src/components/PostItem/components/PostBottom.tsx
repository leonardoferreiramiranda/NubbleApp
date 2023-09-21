import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

interface Props {
  post: Post;
}
export function PostBottom({post}: Props) {
  const commentText = getCommentText(post.commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {post.author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1" mb="s8">
        {post.text}
      </Text>
      {commentText && (
        <Text preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
