import axios from 'axios'

const $axios = axios.create({
  baseURL: process.env.baseUrl
})

$axios.interceptors.response.use(response => {
  return response
})

export default $axios
