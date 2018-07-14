import React from 'react'
import styled from 'react-emotion'
import {lighten} from 'polished'
import {Link} from 'react-static'
import Ink from 'react-ink'

import {landingColor} from './Layout'

import {
  font,
  lg,
  sm,
  xs,
} from '../ui/style'

import logo from '../../assets/logo.svg'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  padding: 1.2em;
  background: transparent;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;

  flex: 2;
`

const Center = styled.div`
  flex: 1;

  @media screen and (max-width: ${lg}px) {
    display: none;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  margin-right: 3.5em;

  @media screen and (max-width: ${xs}px) {
    flex: 4;
  }
`

const Menu = styled(Link)`
  flex: 1;
  align-self: center;

  margin-right: 2em;
  margin-left: 2em;

  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  color: white;

  ${Left} > & {
    @media screen and (max-width: ${xs}px) {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`

const Logo = styled.img`
  align-self: center;

  width: 2em;
  height: auto;

  margin-left: 1em;
  margin-right: 1em;

  @media screen and (max-width: ${sm}px) {
    width: 2.5em;
  }
`

const TryButton = styled(Link)`
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 0;
  align-self: center;
  border-radius: 3px;
  background: ${landingColor};
  appearance: none;
  color: #efefef;
  cursor: pointer;
  margin-left: 1em;
  outline: none;
  padding: 0.5em 0.8em;
  position: relative;
  text-decoration: none;

  &:hover {
    background: ${lighten(0.1, landingColor)};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
`

const Inline = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 840px) {
    display: none;
  }
`

const LogoAnchor = styled(Link)`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    transform: scale(1.15) rotate(180deg);
  }
`

// Nav: Possibilities Examples Ideas
const Nav = () => (
  <NavBar color="#ffffff">
    <Left>
      <LogoAnchor to="/">
        <Logo src={logo} alt="Logo" />
      </LogoAnchor>
      <Inline>
        <Menu to="#!">Overview</Menu>
        <Menu to="#!">Examples</Menu>
        <Menu to="#!">FAQ</Menu>
        <Menu to="#!">Contact</Menu>
      </Inline>
    </Left>
    <Center />
    <Right>
      <Inline>
        <Menu to="#!">Sign In</Menu>
        <TryButton to="/dashboard">
          Try Now
          <Ink />
        </TryButton>
      </Inline>
    </Right>
  </NavBar>
)

export default Nav
