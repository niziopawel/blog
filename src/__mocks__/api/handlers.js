import { allPosts } from '../data/posts'
import { API_URL } from '../../config/API'
import { rest } from 'msw'

export const handlers = [
  rest.get(`${API_URL}/posts`, (req, res, ctx) => {
    return res(ctx.json(allPosts))
  }),
]
