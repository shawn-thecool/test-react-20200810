import { makeRequest } from '../index'

export function getBanners() {
  return makeRequest({
    method: 'GET',
    url: '/api/v1/action-banners',
  })
}
export function getBannerById(id) {
  return makeRequest({
    method: 'GET',
    url: `/api/v1/action-banners/${id}`,
  })
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
