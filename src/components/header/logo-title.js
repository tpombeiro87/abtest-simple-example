import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
`

const PlainLink = styled.a`
  display: flex;
  align-items: center;
`

const Logo = () => (
  <PlainLink aria-label='Logo'>
    <H1>A/B Tests Demo </H1>
  </PlainLink>
)

export default Logo
