import React from 'react'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`

const Logo = styled.img`
  width: 100%;
`

const Heading = styled.h1``

const Landing = () => (
  <Container>
    <Logo src="/muay-lumken-logo.png" />
  </Container>
)

export default Landing
