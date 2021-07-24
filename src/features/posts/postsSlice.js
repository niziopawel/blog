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

export default postsSlice.reducer
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(state => state.posts)
