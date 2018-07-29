import axios, { AxiosRequestConfig } from 'axios'

const http = {
  create: (config: AxiosRequestConfig) => {
    return axios.create(config)
  },
  get: (url: string, config: AxiosRequestConfig) => {
    // return this.http.get(url, config)
  }
}

export default http
