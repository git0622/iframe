import axios from './request'
export function test() {
  return axios.get('/manage-api/v1/categories?pageNumber=1&pageSize=1000&categoryLevel=1&parentId=0')
}

export function login(params) {
  return axios.post('/manage-api/v1/adminUser/login', params)
}

export function getData(params) {
  return axios.get('/manage-api/v1/indexConfigs', {
    params: params
  })
}