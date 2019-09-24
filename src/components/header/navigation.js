import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import { compactVersionMediaQuery, wideVersionMediaQuery } from '../../lib/responsive-utils'
import ActiveTestsListing from '../active-tests-listing'

import NavLink from './nav-link'
import HamburguerMenu from './hamburguer-menu'

const ANIMATION_DURATION = 250

const TRANSITIONS_STYLES = {
  entering: { transform: 'translate(730px, 0px)' },
  entered: { transform: 'translate(0px, 0px)' },
  exiting: { transform: 'translate(730px, 0px)' },
  exited: { display: 'none' },
}

const Nav = styled.nav`
  margin-left: 40px;
`

const LinksWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: 0px;
  top: 76px;

  background: white;
  border-bottom: solid;
  border-width: 1px;
  border-color: #c6c6c6;
  transition: transform ${ANIMATION_DURATION}ms ease-out;
  ${props => TRANSITIONS_STYLES[props.elementState]};
  z-index: 1;
  @media ${compactVersionMediaQuery} {
    width: 100%;
  }
  @media ${wideVersionMediaQuery} {
    width: 320px;
    border-left: solid;
    border-width: 1px;
    border-color: #c6c6c6;
  }
`

const Navigation = ({ hamburguerMenuOpen, onToggleHamburguerMenu, pages }) => (
  <Nav>
    <HamburguerMenu isActive={hamburguerMenuOpen} onClick={onToggleHamburguerMenu} />

    <Transition in={hamburguerMenuOpen} timeout={ANIMATION_DURATION}>
      { elementState =>
        <LinksWrapper elementState={elementState} hamburguerMenuOpen={hamburguerMenuOpen}>
          { pages
            .filter(page => page.showInMenu)
            .map(({ title, url }) =>
              <NavLink
                key={url}
                onClick={onToggleHamburguerMenu}
                title={title}
                url={url} />
            )
          }
          <ActiveTestsListing />
        </LinksWrapper>
      }
    </Transition>
  </Nav>
)

Navigation.propTypes = {
  pages: PropTypes.array,
  onToggleHamburguerMenu: PropTypes.func,
  hamburguerMenuOpen: PropTypes.bool,
}

export default Navigation
