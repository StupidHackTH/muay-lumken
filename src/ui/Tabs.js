import React from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'

// box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.76em 1.5em;
  background: transparent;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;

  font-weight: 300;
  font-size: 1.1em;
  text-transform: capitalize;
`

const TabIndicator = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${props => 100 / props.total}%;
  border-bottom: 2px solid ${props => props.color || 'white'};
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  transform: translateX(${props => props.index * 100}%);
`

const Tabs = ({tab, go, tabs, labels, color}) => {
  const index = Math.max(tabs.indexOf(tab), 0)

  return (
    <TabWrapper>
      {tabs.map(item => (
        <Tab key={item} onClick={() => go(item)}>
          {labels[item]}
          <Ink opacity={0.1} />
        </Tab>
      ))}
      <TabIndicator color={color} total={tabs.length} index={index} />
    </TabWrapper>
  )
}

export default Tabs
