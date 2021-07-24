import { API_URL } from '../../config/API'

const commentsAPI = {
  async fetchPostsComments(postId) {
    const response = await fetch(`${API_URL}/comments?postId=${postId}`, {
      method: 'GET',
    })

    return response.json()
  },

  async addNewComment(postId, newPost) {
    const response = await fetch(`${API_URL}/comments?postId=${postId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })

    return response.json()
  },
}

export default commentsAPI
