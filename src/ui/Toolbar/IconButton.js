import React from 'react'
import styled from 'react-emotion'
import {Link} from 'react-static'

import Icon from '../Icon'

const makeIconWrapper = tag => styled(tag)`
  display: flex;
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  cursor: pointer;

  border: none;
  outline: none;
  appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  transition: 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  opacity: ${props => props.opacity || 0.85};
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));

  &:hover {
    transform: scale(1.2);
    opacity: 1;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));
  }
`

const IconLinkAnchor = makeIconWrapper(Link)
const IconButtonWrapper = makeIconWrapper('div')

export const IconLink = ({icon, to, prefetch, size, opacity}) => (
  <IconLinkAnchor size={size} opacity={opacity} to={to}>
    <Icon i={icon} />
  </IconLinkAnchor>
)

export const IconButton = ({icon, size = 1.5, opacity}) => (
  <IconButtonWrapper opacity={opacity}>
    <Icon i={icon} size={size} />
  </IconButtonWrapper>
)
