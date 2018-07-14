import RandExp from 'randexp'

import parse from './parser'
import ruleset from './ruleset'

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
    return parse(this.ruleset, number)
  }
}

const rule = new RuleEngine(ruleset)

if (typeof window !== 'undefined') {
  window.RuleEngine = rule
}

export default rule
