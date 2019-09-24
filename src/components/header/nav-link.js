import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

const InnerLink = styled(Link)`
  margin-right: 10px;
  width: 100%;
  text-decoration-line: none;
  font-family: 'Montserrat', sans-serif;
  color: black;
  text-transform: uppercase;

  padding: 40px;
  :hover {
    background-color: #80808017;
  }
  ${props => props.active && 'text-decoration: underline;'};
`

const NavLink = ({ url, title, location, onClick }) => (
  <InnerLink active={url === location.pathname ? 1 : 0} aria-label={`Link for ${title}`} key={url} onClick={onClick} to={url} >
    {title}
  </InnerLink>
)

NavLink.propTypes = {
  onClick: PropTypes.func,
  location: PropTypes.object,
  url: PropTypes.string,
  title: PropTypes.string,
}

export default withRouter(NavLink)
