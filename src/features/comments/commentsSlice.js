import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit'
import commentsAPI from './commentsAPI'

export const fetchPostsComments = createAsyncThunk(
  'comments/fetchPostsComments',
  async postId => {
    const comments = await commentsAPI.fetchPostsComments(postId)

    return comments
  },
)

const commentsAdapter = createEntityAdapter()
const initialState = commentsAdapter.getInitialState({
  isLoading: false,
  error: null,
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPostsComments.fulfilled, (state, action) => {
      commentsAdapter.upsertMany(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchPostsComments.pending, state => {
      state.isLoading = false
    })
    builder.addCase(fetchPostsComments.rejected, (state, action) => {
      state.isLoading = false
      error = action.payload
    })
  },
})

export default commentsSlice.reducer

export const { selectAll: selectAllComments } = commentsAdapter.getSelectors(
  state => state.comments,
)

export const selectCommentsByPostId = postId =>
  createSelector([selectAllComments], comments => {
    return comments.filter(comment => comment.postId == postId)
  })
