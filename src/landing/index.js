import React from 'react'
import styled, {keyframes} from 'react-emotion'
import {hot} from 'react-hot-loader'
import {Link} from 'react-static'
import Ink from 'react-ink'

import Particle from 'react-particles-js'

import BaseButton from '../ui/Button'
import Paper from '../ui/Paper'

import particle from './particle'

const Particles = styled(Particle)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;
`

const Background = styled.div`
  background: linear-gradient(45deg, #ed1c24, #fcee21);
`

const Button = styled(BaseButton)`
  font-size: 5.5em;
  font-family: 'bangli';
  padding: 0.1em 0.1em;

  width: auto;
  height: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
`

const Logo = styled.img`
  position: relative;
  z-index: 1;
  width: 32em;

  align-self: center;
`

const tummyMove = keyframes`
  0% {
    transform: translate(-300px, -300px) rotate(-360deg);
  }

  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
`

// <audio src="/shitangmae.mp3" autoPlay />

const Notice = styled.div`
  color: #353e48;
  margin: 0.3em 0;

  font-family: bangli;
  font-size: 4.8em;

  text-align: center;
`

const Card = styled(Paper)`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 25px;

  animation-duration: 1.8s;
  animation-name: ${tummyMove};
  animation-iteration-count: 1;
  animation-easing-function: ease-in-out;

  &:hover {
    transform: scale(1.05) rotate(4deg);
    box-shadow: rgba(0, 0, 0, 0.65) 4px 4x 30px;
  }
`

const Red = styled.span`
  color: red;
`

const Landing = () => (
  <Background>
    <Particles params={particle} />

    <Container>
      <Link to="/generate" style={{textDecoration: 'none'}}>
        <Card>
          <Ink />

          <Logo src="/muay-lumken-aichan.png" />

          <Notice>
            อย่าลืม
            <Red>พนมมือ</Red>
            และ
            <Red>เปิดเสียง</Red>
            &nbsp;เพื่อความ
            <Red>ศักดิ์สิทธิ์</Red>
            สูงสุด
          </Notice>

          <Button>มารวยกันเถอะ!</Button>
        </Card>
      </Link>
    </Container>
  </Background>
)

export default hot(module)(Landing)
