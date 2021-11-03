import axios from './axios'

export const getLastPosts = async (page) => {
    const result = await axios.get('posts', {params: {page: page}})
    return result.data
}