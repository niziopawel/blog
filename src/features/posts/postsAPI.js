import { API_URL } from '../../config/API'

const postsAPI = {
  async fetchAll() {
    const response = await fetch(`${API_URL}/posts`, { method: 'GET' })

    return response.json()
  },
  async fetchPostById(id) {
    const response = await fetch(`${API_URL}/posts/${id}`)

    return response.json()
  },
}

export default postsAPI
