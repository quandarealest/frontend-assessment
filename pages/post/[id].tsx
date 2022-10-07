import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { fetchPostDetail, usePostDetail } from '../../hooks/usePosts'
import Loading from '../../components/Loading'
import {
  Title,
  DateInfo,
  ItemWrapper,
  Author,
  DateAndAuthorWrapper,
  DateWrapper,
  CommentsWrapper,
  CommentCard,
  CommentTitle
} from '../../styles/PostDetail'
import { ButtonWrapper } from '../../styles/Post'

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = {
  dehydratedState: DehydratedState
}

type postProps = {
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

const postItem = () => {
  const router = useRouter()
  const { query: { id } } = useRouter()
  if (id === undefined) return <div>No Data</div>

  const { data, isLoading, isFetching } = usePostDetail(id)

  if (isLoading || isFetching) return <Loading />
  if (data === undefined) return <div>No Data</div>


  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  }

  const publishDate = new Date(data.createdAt).toDateString()
  const modifiedDate = new Date(data.updatedAt).toDateString()
  return (
    <ItemWrapper>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <Title>{data.title}</Title>
        <h4>{data.description}</h4>
        <DateAndAuthorWrapper>
          <DateWrapper>
            <DateInfo>
              Publish Date: {publishDate}
            </DateInfo>
            <DateInfo>
              Modified Date:
            {modifiedDate}
            </DateInfo>
          </DateWrapper>
          <h4>Authors:</h4>
          {data.authors.length > 0 ? (
            data.authors.map((author, index) => (
              <Author key={index}>
                {/* image's urls are not working */}
                {/* <Image src={author.avatar} alt="avatar" width={100} height={100} /> */}
                <Image src='/coffee.png' width={50} height={50} />
                <span>{author.name}</span>
              </Author>
            ))
          ) : (
              <h5>Unknown author</h5>
            )}
        </DateAndAuthorWrapper>
        <div>
          <h4>Comments:</h4>
          {data.comments.length > 0 ? (
            data.comments.map((cmt, index) => (
              <>
                <CommentsWrapper>
                  <CommentCard key={index}>
                    <CommentTitle>
                      <h4>
                        {cmt.title}
                      </h4>
                      <span>Posted: {new Date(cmt.createdAt).toDateString()}</span>
                      <span>Edited: {new Date(cmt.updatedAt).toDateString()}</span>
                    </CommentTitle>
                    <p>
                      {cmt.description}
                    </p>
                  </CommentCard>
                </CommentsWrapper>
              </>
            ))
          ) : (
              <h5>No new comment</h5>
            )}
        </div>
        <ButtonWrapper position='left'>
          <button
            onClick={handleBack}
          >
            <p>
              &larr; Back
          </p>
          </button>
        </ButtonWrapper>
        <ButtonWrapper position='left' isMobile>
          <button
            onClick={handleBack}
          >
            <p>
              &larr; Back
          </p>
          </button>
        </ButtonWrapper>
      </article>
    </ItemWrapper>
  )
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
  const params = context.params!;
  const queryClient = new QueryClient()
  await queryClient.fetchQuery<postProps>(['postDetail', params.id], () => fetchPostDetail(params.id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default postItem
