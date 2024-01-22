import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  post: Post;
}

export function PostHeader({post}: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('ProfileScreen', {userId: post.author.id});
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={post.author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {post.author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
