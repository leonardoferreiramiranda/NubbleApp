import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommetTypes';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );

  async function createCommet(message: string) {
    await mutate({message});
  }
  return {
    createCommet,
    loading,
    error,
  };
}
