import { URL } from '../config/API'

export const postsActions = {
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
}

export const fetchPostsStart = () => ({
  type: postsActions.FETCH_POSTS_START,
})

export const fetchPostsSuccess = data => ({
  type: postsActions.FETCH_POSTS_SUCCESS,
  payload: data,
})

export const fetchPostsFailure = error => ({
  type: postsActions.FETCH_POSTS_SUCCESS,
  payload: error,
})

export const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsStart())

  try {
    const response = await fetch(`${URL}/posts`)

    const posts = await response.json()
    dispatch(fetchPostsSuccess(posts))
  } catch (err) {
    dispatch(fetchPostsFailure(err))
  }
}
