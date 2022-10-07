import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import PostList from '../components/PostList'
import Loading from '../components/Loading';

describe('Post List', () => {
  it.todo('increase one number when click show more')
  it.todo('decrease one number when click show less')

  const queryClient = new QueryClient()
  const onClick = jest.fn()
  afterEach(cleanup)

  it('should render', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    )
  })

  it('should increase one number when click show more', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    )
    const buttonIncrement = await screen.getByTestId("incrementBtn")
    expect(buttonIncrement).toBeInDocument()
  })

  it('should render <Loading /> when fetching or loading data', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    )
    jest.mock('react-query', () => ({
      useQuery: jest.fn().mockReturnValue(({ data: [{ name: 'title1' }], isLoading: true, error: {} }))
    }))
    expect(<Loading />).toBeInDocument()
  })

  it('catch when no data is fetched successfully', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    )

    jest.mock('react-query', () => ({
      useQuery: jest.fn().mockReturnValue(({ data: [], isLoading: false, error: {} }))
    }))
    const noDataDiv = screen.getByText('No data!')
    expect(noDataDiv).toBeInDocument()
  })

  it('should render Post item when data is fetched successfully', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    )

    jest.mock('react-query', () => ({
      useQuery: jest.fn().mockReturnValue(({ data: [{ name: 'title2' }], isLoading: false, error: {} }))
    }))

    // expect(<Post post={data} />).toBeInDocument()
  })
})