import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetails } from '../../actions/actions_index.js'

class Home extends React.Component {
  componentWillMount () {
    if (this.checkCookie()) {
      this.props.getUserDetails()
    }
  }

  checkCookie () {
    return document.cookie.indexOf('twitterUserCookie') > -1
  }

  render () {
    console.log(this.props.userDetails)
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <div className='image-container'>
              <img src='img/rhino.png' />
            </div>
            <p>Your app goes here...</p>
            {this.checkCookie() ? '' : <a href='/login-with-twitter'>login with twitter</a>}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps, { getUserDetails })(Home)
