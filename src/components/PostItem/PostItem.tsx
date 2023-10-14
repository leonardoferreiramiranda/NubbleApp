import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader post={post} />
      <PostImage imageURL={post.imageURL} />
      <PostActions post={post} />
      <PostBottom post={post} />
    </Box>
  );
}
