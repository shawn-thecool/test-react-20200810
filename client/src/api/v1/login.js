import { makeRequest } from '../index'

export function userLogin(user_id, password) {
  const requestConfig = {
    method: 'POST',
    url: '/login',
    data: JSON.stringify({ user_id, password }),
  }
  return makeRequest(requestConfig)
}

export function userLoguot(){
    // const requestConfig = {}
    
}