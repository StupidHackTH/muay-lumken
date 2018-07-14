import React from 'react'
import styled, {css} from 'react-emotion'
import Ink from 'react-ink'

import Icon from './Icon'

// Colors
const primary = 'rgb(33, 150, 243)'
const inactive = 'rgba(0, 0, 0, 0.54)'

const Container = styled.div`
  position: fixed;
  bottom: 0px;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 56px;

  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);

  border-radius: 2px;
  -webkit-tap-highlight-color: transparent;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`

const ItemContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  border: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 6px 12px 10px;
  outline: none;
  font-size: inherit;
  font-weight: inherit;
  position: relative;
  transition: padding-top 0.3s;
  min-width: 80px;
  max-width: 168px;
  flex: 1 1 0%;
  background: none;
`

// prettier-ignore
const ItemLabel = styled.div`
  transition: all 0.3s ease-in-out;
  font-size: 12px;
  transition: color 0.3s, font-size 0.3s;
  color: ${inactive};

  ${props => props.active && css`
    font-size: 14px;
    color: ${primary};
  `}
`

const Item = ({label, icon, onClick, active}) => (
  <ItemContainer onClick={onClick}>
    <Icon i={icon} fill={active ? primary : inactive} />
    <ItemLabel active={active}>{label}</ItemLabel>
    <Ink opacity={0.1} />
  </ItemContainer>
)

const BottomNavigation = ({selected, tabs, setTab}) => (
  <Container>
    {tabs.map(item => (
      <Item
        key={item.path}
        onClick={() => setTab(item.path)}
        active={selected === item.path}
        {...item}
      />
    ))}
  </Container>
)

export default BottomNavigation
