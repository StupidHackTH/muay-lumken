import React, {Component} from 'react'
import RandExp from 'randexp'

import RainbowText from './RainbowText'

export default class Generator extends Component {
  state = {number: '0000000000'}

  componentDidMount() {
    this.regen()
  }

  regen = () => {
    let times = 0

    const prefix = new RandExp(/0[689]/).gen()

    const timer = setInterval(() => {
      if (times > 10) return clearInterval(timer)

      const {number} = this.state

      const fix = number.slice(2, times)
      const remain = 10 - times
      const pattern = prefix + fix + '\\d{' + remain + '}'

      console.log(pattern, prefix, fix, remain)

      const phone = new RandExp(new RegExp(pattern))

      this.setState({number: phone.gen()})
      times++
    }, 100)
  }

  render() {
    const {number} = this.state

    return <RainbowText value={number} onClick={this.regen} />
  }
}
