const apiMap = {
  development: {
    baseUrl: 'http://localhost:7001',
  },
  production: {
    baseUrl: 'http://localhost:8000',
  }
}

export default apiMap[process.env.NODE_ENV]