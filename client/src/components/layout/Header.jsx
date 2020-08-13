import React from 'react'
import { Link } from 'react-router-dom'
// constants
import { ROUTER_PATH } from '../../constants'

// header wrapper
export const Header = () => (
  <header>
    <AppTitle />
    <hr />
    <GnbList />
  </header>
)
// title
export const AppTitle = () => (
  <div>
    <h1>A-Company</h1>
  </div>
)
// gnb
export const GnbItem = () =>
  Object.values(ROUTER_PATH)
    .filter((path) => path !== ROUTER_PATH.ALL && path !== ROUTER_PATH.INDEX)
    .map((path, idx) => (
      <li key={`gnb-${idx}`}>
        <Link to={path}>{path.substring(1)}</Link>
      </li>
    ))
export const GnbList = () => (
  <div className="wrap_gnb">
    <ul className="list_gnb">
      <GnbItem />
    </ul>
  </div>
)
