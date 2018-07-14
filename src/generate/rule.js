import RandExp from 'randexp'

import ruleset from './ruleset'

const flatten = (x, y) => [...x, ...y]

const dedupe = (list = [], prop) =>
  list.filter(
    (obj, pos, arr) =>
      arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos,
  )

class RuleEngine {
  constructor(ruleset) {
    this.ruleset = ruleset
  }

  generate(constraint) {
    const pattern = this.buildPattern(constraint)
    const generator = new RandExp(pattern)

    return generator.gen()
  }

  buildPattern(constraint) {
    return /0[689]\d{8}/
  }

  parse(number) {
    const {summation, rules} = this.ruleset

    const entries = Object.entries(rules)

    const counts = {}
    const reasons = {}

    let isNegative = false
    let negativeReason = []

    function count(value = {}) {
      const {trait} = value

      if (!isNegative && value.negative) {
        isNegative = true

        negativeReason.push(value.matchWith)
      }

      if (trait) {
        const count = counts[trait] || 0
        counts[trait] = count + 1

        if (!reasons[trait]) reasons[trait] = []

        reasons[trait].push(value.matchWith)

        delete value.matchWith
      }

      return value
    }

    let match = entries
      .map(([key, value]) => {
        if (value.includes) {
          return value.includes
            .map(num => {
              if (number.includes(num)) {
                return {trait: key, matchWith: num, ...value}
              }
            })
            .filter(x => x)
        }
      })
      .reduce(flatten)
      .map(count)

    match = dedupe(match, 'trait').map(x => ({
      ...x,
      reason: reasons[x.trait],
      count: counts[x.trait],
    }))

    const occupations = match.filter(x => x.occupation)

    match = match.filter(x => !x.occupation)

    const sum = number
      .toString()
      .split('')
      .map(x => parseInt(x))
      .reduce((x, y) => x + y)

    return {
      match,
      sum,
      sumResult: summation[sum],
      occupations,
      isNegative,
      negativeReason,
    }
  }
}

const rule = new RuleEngine(ruleset)

if (typeof window !== 'undefined') {
  window.RuleEngine = rule
}

export default rule
