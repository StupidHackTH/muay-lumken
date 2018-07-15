import RandExp from 'randexp'

import parse from './parser'
import ruleset from './ruleset'

const randomize = list => list[Math.floor(Math.random() * list.length)]

function calculatePadding(constraints) {
  const total = 7
  const data = constraints.length * 2
  const usable = total - data
  const start = Math.round(Math.random() * usable)
  const end = usable - start

  return [start, data, end]
}

function generatePattern(constraints) {
  const [start, mid, end] = calculatePadding(constraints)

  return '\\d{' + start + '}' + constraints.join('|') + '\\d{' + end + '}'
}

class RuleEngine {
  constructor(ruleset) {
    this.ruleset = ruleset
  }

  generate(...reqs) {
    const {summation} = this.ruleset

    const rules = reqs.map(req => this.ruleset.rules[req])

    const constraints = rules.map(rule => rule.includes).map(randomize)

    const pattern = generatePattern(constraints)

    console.log('Rules:', rules, 'Constraints:', constraints)
    console.log('Pattern:', pattern)

    const regex = new RegExp(`0[689]\\d(${pattern})`)
    const generator = new RandExp(regex)

    return generator.gen()
  }

  parse(number) {
    return parse(this.ruleset, number)
  }
}

const rule = new RuleEngine(ruleset)

if (typeof window !== 'undefined') {
  window.RuleEngine = rule
}

export default rule
