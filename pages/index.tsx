import type { NextPage } from 'next'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'

import { fetchPosts } from '../hooks/usePosts'
import PostList from '../components/PostList'

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

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Frontend Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PostList />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<PostData[]>(['posts', 1], () => fetchPosts(1))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home

