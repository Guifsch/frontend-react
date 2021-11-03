import axios from 'axios'

const api = axios.create({
  baseURL: "https://gorest.co.in/public/v1/",
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer 32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee`
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

export default api
