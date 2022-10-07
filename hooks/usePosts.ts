import { useQuery } from 'react-query'

type PostData = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  authors: [
    {
      createdAt: Date;
      name: string;
      avatar: string;
      updatedAt: Date;
      id: string;
      postId: string;
    }
  ];
  comments: [
    {
      createdAt: Date;
      title: string;
      description: string;
      updatedAt: Date;
      id: string;
      postId: string;
    }
  ]
}

const fetchPosts = async (pagination = 1) => {
  let parsed: PostData[] = await (await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')).json()
  const result: PostData[] = parsed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice((pagination - 1) * 5, pagination * 5)
  return result
}

const usePosts = (pagination: number) => {
  return useQuery(['posts', pagination], () => fetchPosts(pagination))
}

const fetchPostDetail = async (id: string | string[] | undefined) => {
  const result: PostData = await (await fetch(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts/${id}`)).json()
  return result
}

const usePostDetail = (id: string | string[] | undefined) => {
  return useQuery(['postDetail', id], () => fetchPostDetail(id))
}

export { usePosts, fetchPosts, fetchPostDetail, usePostDetail }