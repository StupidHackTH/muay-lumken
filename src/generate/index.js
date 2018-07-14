import React, {Component} from 'react'
import Particle from 'react-particles-js'
import styled, {keyframes} from 'react-emotion'
import RandExp from 'randexp'
import {hot} from 'react-hot-loader'
import {Link} from 'react-static'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import Alchemy from './Alchemy'
import RainbowText from './RainbowText'
import RuleEngine from './rule'

import particle from '../landing/particle'

import Tabs from '../ui/Tabs'
import Paper from '../ui/Paper'

const rotateIn = keyframes`
  0% {
    transform: translate(-300px, -300px) rotate(-360deg);
  }

  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
`

const dhummyWarp = keyframes`
  0% {
    transform: translate(-300px, -300px) rotate(-360deg);
  }

  100% {
    transform: translate(900px, 500px) rotate(360deg);
  }
`

const Card = styled(Paper)`
  padding: 0em 1em 1em 1em;

  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 25px;

  animation-duration: 1.8s;
  animation-name: ${rotateIn};
  animation-iteration-count: 1;
  animation-easing-function: ease-in-out;
`

const Particles = styled(Particle)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;
`

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(45deg, #ed1c24, #fcee21);
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
`

const Dhummy = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 32em;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 25px;

  animation-duration: 2.8s;
  animation-name: ${dhummyWarp};
  animation-iteration-count: infinite;
  animation-easing-function: ease-in-out;
  animation-direction: alternate-reverse;

  opacity: 0.18;
`

const Logo = styled.img`
  position: absolute;
  left: 0em;
  top: 1em;
  z-index: 1;
  width: 13em;
`

const ITER_COUNT = 10

const tabLabels = {
  sell: 'ขายเบอร์มงคล',
  check: 'ตรวจเบอร์',
  random: 'สุ่มเบอร์',
}

const tabs = Object.keys(tabLabels)

const TabContainer = styled.div`
  position: relative;
  top: -2em;
  width: 100%;

  background: white;
`

@observer
class Generator extends Component {
  @observable tab = 'sell'
  @observable number = '0000000000'

  componentDidMount() {
    this.regen()
  }

  regen = () => {
    let times = 0

    const prefix = new RandExp(/0[689]/).gen()

    this.spinning = true

    const timer = setInterval(() => {
      const number = this.number

      if (times > ITER_COUNT) {
        this.spinning = false

        return clearInterval(timer)
      }

      const fix = number.slice(2, times)
      const remain = ITER_COUNT - times
      const pattern = '\\d{' + remain + '}'

      const phone = new RandExp(new RegExp(pattern))
      const num = (prefix + fix + phone.gen()).slice(0, 10)

      console.table({num, number, pattern, prefix, fix, remain})
      this.number = num

      times++
    }, 80)
  }

  setTab = tab => {
    this.tab = tab
  }

  render() {
    console.log(this.tab, this.number)

    return (
      <Background>
        <Particles params={particle} />

        <Link to="/">
          <Logo src="/muay-lumken-logo.png" />
        </Link>

        <Dhummy src="/dhummy.png" />

        <Container>
          <Card>
            <TabContainer>
              <Tabs
                tab={this.tab}
                go={this.setTab}
                tabs={tabs}
                labels={tabLabels}
                color="#f03c28"
              />
            </TabContainer>

            {this.tab === 'random' && (
              <div>
                <Alchemy spinning={this.spinning} />

                <RainbowText value={this.number} onClick={this.regen} />
              </div>
            )}

            <audio src="/shitangmae.mp3" autoPlay />
          </Card>
        </Container>
      </Background>
    )
  }
}

export default hot(module)(Generator)
