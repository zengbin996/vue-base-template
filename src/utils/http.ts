import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.headers.common['token'] = localStorage.token || ''

axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

//更新token
const updateToken = (value: string) => {
  axios.defaults.headers.common['token'] = value
}

export { updateToken }
