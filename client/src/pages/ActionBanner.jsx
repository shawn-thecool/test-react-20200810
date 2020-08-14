import React from 'react'
import ActionBannerList from '../components/banner/ActionBannerList'
import Counter from '../components/common/Counter'

export default function ActionBanner() {
  return (
    <div className="wrap_page">
      <div className="section_tit">
        <h2>pagename : ActionBanner</h2>
      </div>
      <div className="section_cont">
        <p>page contents</p>
        <ActionBannerList />
        <Counter />
      </div>
    </div>
  )
}
