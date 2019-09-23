import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spacer from '../components/spacer'

const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
`

const Layout = ({ children, title }) =>
  <Spacer left={1} right={1} top={1}>
    <AlignCenter>
      <Title>{title}</Title>
      {children}
    </AlignCenter>
  </Spacer>

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Layout
