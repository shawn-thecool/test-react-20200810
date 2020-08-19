import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react'
import { useStore } from '../../stores'

const ActionBannerList = () => {
  // hooks
  const { banner } = useStore()

  useEffect(() => {
    banner.getBanners()
  }, [banner])

  const ListItem = ({ id, name, isNew }) => (
    <li key={id}>
      <span>{id}</span>
      <span>-{name}</span>
      <span>-{String(isNew)}</span>
      <input
        type="button"
        value="update"
        onClick={() => {
          banner.updateBanner({ id, name: 'updated', isNew })
        }}
      />
      <input
        type="button"
        value="delete"
        onClick={() => {
          banner.deleteBanner(id)
        }}
      />
    </li>
  )

  return useObserver(() => (
    <div>
      <strong>aciton banners</strong>
      <p>{banner.number}</p>
      <input
        type="button"
        value="create"
        onClick={() => {
          banner.createBanner()
        }}
      />
      <input
        type="number"
        placeholder="search by banner id.."
        onKeyUp={(e) => {
          banner.getBannerById(e.target.value)
        }}
      />
      <ul>
        {banner.banners.map((banner) => (
          <ListItem key={banner.id} {...banner} />
        ))}
      </ul>
    </div>
  ))
}

export default ActionBannerList
