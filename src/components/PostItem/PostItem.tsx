import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

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
      <PostImage post={post} />
      <PostActions post={post} />
      <PostBottom post={post} />
    </Box>
  );
}
