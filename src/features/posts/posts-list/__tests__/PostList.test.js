import { API_URL, server, render, screen } from '../../../test-utils'
import PostsList from '../PostsList'

function setup() {
  jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/blog',
      search: '',
      hash: '',
      state: undefined,
      key: '',
    }),
    useHistory: () => ({
      push: jest.fn(),
    }),
  }))
  jest.spyOn(URLSearchParams.prototype, 'get').mockReturnValue(null)
}

setup()
test('fetches & displays posts', async () => {})
