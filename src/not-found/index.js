import React from 'react'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`

const Heading = styled.h1`
  color: #555;
  font-weight: 500;
  font-size: 2.8em;
  letter-spacing: 0.08em;
`

const NotFound = () => (
  <Container>
    <Heading>Page Not Found</Heading>
  </Container>
)

export default NotFound
