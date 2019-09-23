import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonElement = styled.button`
    width: 100%;
    max-width: 600px;
    margin: 15px 0 15px 0;
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;

    padding: 15px 38px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all .2s ease-in;

    :hover {
      background-color: #ffffff;
      border: 1px solid #000000;
      color: #000000;
    }
`

const Cta = ({ text, onClick, ...rest }) => (
  <ButtonElement onClick={onClick} {...rest}>
    {text}
  </ButtonElement>
)

Cta.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Cta
