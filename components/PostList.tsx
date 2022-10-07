import React, { useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import Loading from '../components/Loading'
import Post from './Post'
import { Grid, ButtonWrapper, PostListWrapper } from '../styles/Post'

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

const PostList = () => {
  const [postCount, setPostCount] = useState(1)
  const { data, isLoading, isFetching } = usePosts(postCount)
  if (isLoading || isFetching) return <Loading />
  if (!data || data.length === 0) return <div>No data!</div>

  return (
    <PostListWrapper>
      <ButtonWrapper position='right'>
        <button
          onClick={() => setPostCount(postCount - 1)}
          disabled={postCount === 1}
        >
          <p>
            &larr; Show Less
          </p>
        </button>
      </ButtonWrapper>
      <Grid>
        {data?.map((post: PostData, index: number) => (
          <Post key={index} post={post} />
        ))}
      </Grid>
      <ButtonWrapper position='left'>
        <button
          onClick={() => setPostCount(postCount + 1)}
          disabled={data.length < 5}
        >
          <p>
            Show More &rarr;
          </p>
        </button>
      </ButtonWrapper>
      <ButtonWrapper isMobile>
        <button
          onClick={() => setPostCount(postCount - 1)}
          disabled={postCount === 1}
        >
          <p>
            &larr; Show Less
          </p>
        </button>
        <button
          onClick={() => setPostCount(postCount + 1)}
          disabled={data.length < 5}
        >
          <p>
            Show More &rarr;
          </p>
        </button>
      </ButtonWrapper>
    </PostListWrapper>
  )
}

export default PostList
