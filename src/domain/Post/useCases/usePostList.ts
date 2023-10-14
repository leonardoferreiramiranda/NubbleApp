import {postService, Post} from '@domain';
import {usePaginatedList} from '@infra';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
