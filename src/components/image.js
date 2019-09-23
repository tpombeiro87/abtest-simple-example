import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  max-width: 600px;
`

const Image = ({ src }) => (
  <Img src={src} />
)

Image.propTypes = {
  src: PropTypes.string,
}

export default Image
