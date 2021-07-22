import { postsActions } from '../actions/post-actions'

const initialState = {
  data: [],
  isFetching: false,
  error: null,
}

const PostReducer = (state = initialState, action) => {
  if (action.type === postsActions.FETCH_POSTS_START) {
    return { ...state, isFetching: true }
  }

  if (action.type === postsActions.FETCH_POSTS_SUCCESS) {
    return { ...state, isFetching: false, data: action.payload }
  }

  if (action.type === postsActions.FETCH_POSTS_FAILURE) {
    return { ...state, isFetching: false, data: action.payload }
  }

  return state
}

export default PostReducer
