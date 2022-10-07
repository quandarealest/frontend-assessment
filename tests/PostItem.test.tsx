import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query';

import PostItem from '../pages/post/[id]'

describe('Post Item page', () => {
  const queryClient = new QueryClient()
  it("should render", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PostItem />
      </QueryClientProvider>
    )
  });
})