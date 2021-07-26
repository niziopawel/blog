import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import postsAPI from './postsAPI'

export const fetchPosts = createAsyncThunk('posts/fetchAll', async () => {
  const posts = await postsAPI.fetchAll()
  return posts
})

export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async id => {
    const post = await postsAPI.fetchPostById(id)
    return post
  },
)

export const handlePostLike = postId => {
  return (dispatch, getState) => {
    const state = getState()
    if (!state.posts.likedPostsIds[postId]) {
      dispatch(likePost(postId))
    }
    if (state.posts.likedPostsIds[postId]) {
      dispatch(unLikePost(postId))
    }
  }
}

const postsAdapter = createEntityAdapter()
const initialState = postsAdapter.getInitialState({
  isLoading: false,
  error: null,
  likedPostsIds: {},
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost(state, action) {
      return {
        ...state,
        likedPostsIds: {
          ...state.likedPostsIds,
          [action.payload]: action.payload,
        },
      }
    },
    unLikePost(state, action) {
      const likedPostsIdsCpy = { ...state.likedPostsIds }
      delete likedPostsIdsCpy[action.payload]

      return {
        ...state,
        likedPostsIds: likedPostsIdsCpy,
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.upsertMany(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(fetchPostById.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      postsAdapter.upsertOne(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

const { actions, reducer } = postsSlice

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(state => state.posts)

export const selectLikedPosts = state => {
  return state.posts.likedPostsIds
}
export const { likePost, unLikePost } = actions

export default reducer
