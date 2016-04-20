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

  checkState () {
    const state = [0, 1, 2, 4, 1, 2]
    const index = 2;
    return [
      ...state.slice(0, index),
      state[index] + 1,
      ...state.slice(index + 1)
    ]
  }

  componentWillMount () {
    console.log(this.checkState())
    // if (document.cookie.indexOf('reactCookie') > -1) {
    //   axios.get('/user-details').then(response => {
    //     this.setState({
    //       userDetails: response.data,
    //       auth: true
    //     })
    //   })
    // }
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
