import Link from 'next/link'
import { Card } from '../styles/Post'

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

const Post = (props: { post: postProps }) => {
  const { post } = props
  return (
    <Link href='/post/[id]' as={`/post/${post.id}`}>
      <Card>
        <h3>
          {post.title} &rarr;
        </h3>
        <p>
          {post.description}
        </p>
      </Card>
    </Link>
  )
}

export default Post
