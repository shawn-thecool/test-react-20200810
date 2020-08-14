import { makeRequest } from '../index'

export function getBanners() {
  const requestConfig = {
    method: 'GET',
    url: '/api/v1/action-banners',
  }
  return makeRequest(requestConfig)
}
export function getBannerById(id) {
  const requestConfig = {
    method: 'GET',
    url: `/api/v1/action-banners/${id}`,
  }
  return makeRequest(requestConfig)
}
export function createBanner() {
  const requestConfig = {
    method: 'POST',
    url: '/api/v1/action-banners',
  }
  return makeRequest(requestConfig)
}
export function updateBanner({ id, name, isNew }) {
  const requestConfig = {
    method: 'PUT',
    url: '/api/v1/action-banners',
    data: {
      id,
      name,
      isNew,
    },
  }
  return makeRequest(requestConfig)
}
export function deleteBanner(id) {
  const requestConfig = {
    method: 'DELETE',
    url: `/api/v1/action-banners/${id}`,
  }
  return makeRequest(requestConfig)
}
