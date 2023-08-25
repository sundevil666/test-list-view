import axios from 'axios'

axios.defaults.baseURL = 'https://api.beta.mysimplaq.com/api/web-app/'

axios.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'

  config.headers.Origin = 'http://test-x.beta.mysimplaq.com'

  return config
})

export default axios
