import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import LogoTitle from './logo-title'
import Navigation from './navigation'

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #FFF;
  position: relative;
  border-bottom: solid;
  border-width: 1px;
  border-color: #c6c6c6;
  z-index: 100;
`

const HeaderContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

class Header extends Component {
  state = {
    hamburguerMenuOpen: false,
  }

  handleToggleHamburguerMenu = () => {
    this.setState((state) => ({
      hamburguerMenuOpen: !state.hamburguerMenuOpen,
    }))
  }

  render () {
    const { pages } = this.props
    const { hamburguerMenuOpen } = this.state

    return (
      <HeaderWrapper>
        <HeaderContent>
          <LogoTitle />
          <Navigation hamburguerMenuOpen={hamburguerMenuOpen} onToggleHamburguerMenu={this.handleToggleHamburguerMenu} pages={pages} />
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  pages: PropTypes.array,
}

export default Header
