import { render, screen, fireEvent } from '../../../test-utils'
import { allPosts } from '../../../../__mocks__/data/posts'
import PostsList from '../PostsList'

const postsPerPage = 20
const totalPostNumber = allPosts.length

test('fetches and displays posts correctly', async () => {
  render(<PostsList />)

  expect(screen.getByTestId('spinner')).toBeInTheDocument()
  expect(screen.queryByTestId('post-list')).not.toBeInTheDocument()

  const postsContainer = await screen.findByTestId('post-list')
  expect(postsContainer).toBeInTheDocument()
  const firstPostTitle = allPosts[0].title
  expect(screen.getByText(firstPostTitle)).toBeInTheDocument()

  expect(screen.getByTestId('pagination')).toBeInTheDocument()
  expect(postsContainer.children.length).toBe(20)
})

test('render pagination, displaying correct number of pages', async () => {
  const numberOfPages = Math.ceil(totalPostNumber / postsPerPage)
  render(<PostsList />)

  const postsContainer = await screen.findByTestId('post-list')
  expect(screen.getByTestId('previous-btn')).toBeInTheDocument()
  expect(screen.getByTestId('next-btn')).toBeInTheDocument()
  const pages = screen.getAllByTestId('page-number')

  expect(pages.length).toBe(numberOfPages)
  expect(pages[0]).toHaveClass('pagination__item pagination__item--active', {
    exact: true,
  })
})

test('liking posts', async () => {
  render(<PostsList />)

  await screen.findByTestId('post-list')

  const likeBtn = screen.queryAllByTestId('like-inactive')[0]
  expect(screen.queryByTestId('like-active')).not.toBeInTheDocument()
  expect(screen.queryAllByTestId('like-inactive').length).toBe(postsPerPage)

  fireEvent.click(likeBtn)

  expect(screen.queryAllByTestId('like-active').length).toBe(1)
  expect(screen.queryAllByTestId('like-inactive').length).toBe(postsPerPage - 1)
  expect(screen.getByTestId('like-active')).toBeInTheDocument()

  const unlikeBtn = screen.queryByTestId('like-active')
  fireEvent.click(unlikeBtn)

  expect(screen.queryByTestId('like-active')).not.toBeInTheDocument()
})

test('display correct posts after changing pagination page', async () => {
  window.scrollTo = jest.fn()
  render(<PostsList />)

  const postsContainer = await screen.findByTestId('post-list')
  const pages = screen.getAllByTestId('page-number')

  expect(postsContainer.children.length).toBe(postsPerPage)
  expect(screen.getByText(allPosts[0].title)).toBeInTheDocument
  expect(pages[0]).toHaveClass('pagination__item--active')
  fireEvent.click(pages[1])
  expect(pages[0]).not.toHaveClass('paginatio__item--active')
  expect(pages[1]).toHaveClass('pagination__item--active')

  const secondPagePostsNumber = totalPostNumber - postsPerPage
  expect(postsContainer.children.length).toBe(secondPagePostsNumber)

  const secondPageFirstPost = allPosts[postsPerPage + 1]
  expect(screen.getByText(secondPageFirstPost.title)).toBeInTheDocument()
})
