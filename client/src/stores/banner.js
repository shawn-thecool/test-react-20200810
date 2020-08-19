import { observable, action, computed } from 'mobx'
import { getBanners, getBannerById, createBanner, updateBanner, deleteBanner } from '../api/v1/banners'
// constants
import { NETWORK_STATE } from '../constants'
import { newCnt } from './banner.computed'

// bannerStore

const banner = observable({
  banners: [],
  networkState: NETWORK_STATE.PANDDING,
  // getter - computed
  get newCount() {
    return computed(newCnt(this.banners))
  },
  // promise - api call
  getBanners: action('getBanners', () => {
    // TODO: network state & error handling... goes on axios interceptor..
    banner.networkState = NETWORK_STATE.PANDDING
    return getBanners()
      .then((res) => {
        banner.networkState = NETWORK_STATE.DONE
        banner.banners = res.data
        console.log('getBannersData', res)
      })
      .catch((err) => {
        banner.networkState = NETWORK_STATE.ERROR
      })
  }),
  getBannerById: action('getBannerById', (id) => {
    return getBannerById(id).then((res) => {
      banner.banners = res.data
      console.log('getBannersData', res)
    })
  }),
  createBanner: action('createBanner', () => {
    return createBanner().then(() => {
      banner.getBanners()
    })
  }),
  updateBanner: action('updateBanner', (opts) => {
    return updateBanner(opts).then(() => {
      banner.getBanners()
    })
  }),
  deleteBanner: action('deleteBanner', (id) => {
    return deleteBanner(id).then(() => {
      banner.getBanners()
    })
  }),
})

export default banner

