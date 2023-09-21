import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

interface Props {
  post: Post;
}
export function PostImage({post}: Props) {
  return (
    <Image
      resizeMethod="cover"
      source={{uri: post.imageURL}}
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
