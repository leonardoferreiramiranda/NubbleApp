import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}
export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const {createCommet} = usePostCommentCreate(postId, {
    onSuccess: () => {
      onAddComment();
      setMessage('');
      Keyboard.dismiss();
    },
  });
  const [message, setMessage] = useState('');

  return (
    <TextMessage
      onPressSend={createCommet}
      value={message}
      onChangeText={setMessage}
      placeholder="Adicione um comentário"
    />
  );
}
