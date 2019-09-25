import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { GIT_PROJECT_URL } from '../lib/constants'

const TextWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`

const LinkToCode = ({ codeFileName, title }) =>
  <TextWrapper>
    <p>Check the code <a href={`${GIT_PROJECT_URL}/blob/master/src/pages/${codeFileName}.js`} rel='noopener noreferrer' target='_blank'>here</a> for <i>{title}</i></p>
  </TextWrapper>

LinkToCode.propTypes = {
  codeFileName: PropTypes.string,
  title: PropTypes.string,
}
export default LinkToCode
