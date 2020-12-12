import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'
import './layout.css'
import '../styles/global.css'
import Nav from './Navigation/Nav'
import Footer from './Navigation/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div> 
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
