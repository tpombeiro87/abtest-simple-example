import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SpacerElement = styled.div`
  ${props => props.bottom && `margin-bottom: ${props.bottom}em;`}
  ${props => props.left && `margin-left: ${props.left}em;`}
  ${props => props.right && `margin-right: ${props.right}em;`}
  ${props => props.top && `margin-top: ${props.top}em;`}
`
const Spacer = ({ bottom, left, right, top, children }) =>
  <SpacerElement bottom={bottom} left={left} right={right} top={top}>
    {children}
  </SpacerElement>

Spacer.propTypes = {
  children: PropTypes.node,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
}

export default Spacer
