import http from '@/util/http.js'
export function register(username, password) {
  return http.post('/api/user/register', {
    username, password
  })
}

export function login(username, password) {
  return http.post('/api/user/login', {
    username, password
  })
}

export function getTypeList() {
  return http.get('/api/type/list')
}

export function getDataList(params) {
  return http.get('/api/bill/list', {
    params
  })
}

export function addBill(data) {
  return http.post('/api/bill/add', data)
}