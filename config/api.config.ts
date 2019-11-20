const apiMap = {
  development: {
    baseURL: 'http://39.106.173.13/user',
  },
  production: {
    baseURL: 'http://39.106.173.13/user',
  }
}
export default apiMap[process.env.NODE_ENV]