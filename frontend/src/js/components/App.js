import React from 'react'
import axios from 'axios'
import Header from './Header/header_index.js'
import Footer from './Footer/footer_index.js'

import '../../scss/style.scss'

const options = {
  logoUrl: 'img/rhino.png'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header
          logoUrl={options.logoUrl}
          fluid
        />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
