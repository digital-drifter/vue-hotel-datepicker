import axios from 'axios'

const http = {
  create: config => {
    return axios.create(config)
  },
  get: (url, parameters) => {
    return this.http.get(url, parameters)
  }
}

export default http
