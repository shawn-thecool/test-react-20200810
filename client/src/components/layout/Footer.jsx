import React from 'react'
import { Link } from 'react-router-dom'
// constants
import { ROUTER_PATH } from '../../constants'

// footer wrapper
export const Footer = () => (
  <footer>
    <Copyright />
  </footer>
)
// copyright
export const Copyright = () => {
  const fullyear = new Date().getFullYear()
  return (
    <Link to={ROUTER_PATH.INDEX}>
      <small>Copyright © A-Company {fullyear}.</small>
    </Link>
  )
}
