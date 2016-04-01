import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  img: {
    outer: {
      width: '80%',
      maxWidth: '400px',
      margin: '4em auto'
    },
    inner: {
      width: '100%'
    }
  }
}

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <div style={styles.img.outer}>
            <img style={styles.img.inner} src='img/rhino.png' />
          </div>
          <p>Your app goes here...</p>
        </Col>
      </Row>
    </Grid>
  )
}
