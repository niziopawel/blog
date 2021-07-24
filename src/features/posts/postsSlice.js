import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { isActionPending, isActionRejected } from '../utils'
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

const postsAdapter = createEntityAdapter()
const initialState = postsAdapter.getInitialState({
  isLoading: false,
  error: null,
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.upsertMany(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      postsAdapter.upsertOne(state, action.payload)
      state.isLoading = false
    })
    builder.addMatcher(isActionPending, (state, action) => {
      state.isLoading = true
    })
    builder.addMatcher(isActionRejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export default postsSlice.reducer
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(state => state.posts)
