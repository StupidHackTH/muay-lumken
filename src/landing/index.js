import React from 'react'

import {Page} from './Layout'
import Nav from './Nav'

import Fold from './Fold'
import Why from './Why'
import Ideas from './Ideas'
import Join from './Join'

const Landing = () => (
  <Page>
    <Nav />
    <main>
      <Fold />
      <Why />
      <Ideas />
      <Join />
    </main>
  </Page>
)

export default Landing
