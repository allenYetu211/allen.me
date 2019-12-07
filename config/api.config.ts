const apiMap = {
  development: {
    baseURL: 'http://localhost:7001',
  },
  production: {
    baseURL: 'https://www.utauu.com',
  }
}
export default apiMap[process.env.NODE_ENV]