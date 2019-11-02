const apiMap = {
  development: {
    baseURL: 'http://localhost:7001',
  },
  production: {
    baseURL: 'http://localhost:8000',
  }
}

export default apiMap[process.env.NODE_ENV]