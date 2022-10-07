import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query';

import Index from '../pages/index'

describe('Index page', () => {
  const queryClient = new QueryClient()
  it("should render", async () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    )
    const main = getByRole('main')
    expect(main).toBeInTheDocument()
  });
})