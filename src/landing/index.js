import React, {Component} from 'react'
import styled from 'react-emotion'
import {hot} from 'react-hot-loader'

import Generator from './Generator'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  margin: 0 auto;
  width: 50%;
  max-width: 800px;
`

const Logo = styled.img`
  width: 100%;
`

class Landing extends Component {
  render() {
    return (
      <div>
        <Container>
          <Logo src="/muay-lumken-aichan.png" />

          <div>ชี้ทางรวย เบอร์โคตรสวย หมวยลำเค็ญ</div>

          <Generator />
        </Container>

        <audio src="/shitangmae.mp3" autoPlay />
      </div>
    )
  }
}

export default hot(module)(Landing)
