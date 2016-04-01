import React from 'react'
import axios from 'axios'
import Header from './Header/index.js'
import Footer from './Footer/index.js'

import '../../scss/style.scss'

const options = {
  menuItems: ['about', 'contact'],
  logoUrl: 'img/rhino.png'
}

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      auth: false,
      userDetails: ''
    }
  }

  componentWillMount () {
    if (document.cookie.indexOf('reactCookie') > -1) {
      axios.get('/user-details').then(response => {
        this.setState({
          userDetails: response.data,
          auth: true
        })
      })
    }
  }

  render () {
    return (
      <div>
        <Header
          userDetails={this.state.userDetails}
          auth={this.state.auth}
          menuItems={options.menuItems}
          logoUrl={options.logoUrl}
          fluid={true} />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
