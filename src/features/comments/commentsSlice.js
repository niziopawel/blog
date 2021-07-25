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

export const addNewComment = createAsyncThunk(
  'comments/addNewComment',
  async args => {
    const comment = await commentsAPI.addNewComment(args.postId, args.newPost)

    return comment
  },
)

const commentsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.id > a.id,
})
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
    builder.addCase(addNewComment.pending, state => {
      state.isLoading = true
    })
    builder.addCase(addNewComment.fulfilled, (state, action) => {
      commentsAdapter.addOne(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(addNewComment.rejected, (state, action) => {
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
