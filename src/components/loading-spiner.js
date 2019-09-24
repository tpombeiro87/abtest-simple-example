import React from 'react'
import styled, { keyframes } from 'styled-components'

import { AlignCenter } from './layout'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
  cursor: progress;
`

const LoadignSpinner = () => (
  <AlignCenter>
    <Rotate>
      <span aria-label='emoji of Lab Coat spinning' role='img'>
      🥼
      </span>
    </Rotate>
  </AlignCenter>
)

export default LoadignSpinner
