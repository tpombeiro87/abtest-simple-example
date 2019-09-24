import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonElement = styled.a`
    text-decoration: none;
    color: initial;

    width: 100%;
    max-width: 600px;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;

    padding: 15px 0px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all .2s ease-in;
    border: 1px solid #ffffff;

    :hover {
      background-color: #ffffff;
      border: 1px solid #000000;
      color: #000000;
    }
`

const Cta = ({ text, onClick, href, ...rest }) => (
  <ButtonElement href={href} onClick={onClick} {...rest} rel='noopener noreferrer' target='_blank'>
    {text}
  </ButtonElement>
)

Cta.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Cta
