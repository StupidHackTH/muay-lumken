import React from 'react'
import styled from 'react-emotion'

import icons from './iconmap'

const Svg = styled(props => <svg {...props} />)`
  width: ${props => props.size || 1.5}em;
  height: ${props => props.size || 1.5}em;
  fill: ${props => props.fill || '#ffffff'};
  opacity: ${props => props.opacity || 1};

  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`

const Icon = ({i, ...props}) => {
  const icon = icons[i]

  if (icon) {
    return (
      <Svg viewBox={icon.viewBox || '0 0 24 24'} {...props}>
        <path d={icon.path || icon} />
      </Svg>
    )
  }

  return null
}

export default Icon
