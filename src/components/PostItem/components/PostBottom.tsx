import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

interface Props {
  post: Post;
  hideCommentAction?: boolean;
}
export function PostBottom({post, hideCommentAction}: Props) {
  const navigation = useNavigation();
  const commentText = hideCommentAction
    ? null
    : getCommentText(post.commentCount);

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {post.author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1" mb="s8">
        {post.text}
      </Text>
      {commentText && (
        <Text
          preset="paragraphSmall"
          bold
          color="primary"
          onPress={navigateToPostCommentScreen}>
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
