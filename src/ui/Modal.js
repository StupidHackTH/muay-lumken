import React from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'

import Icon from './Icon'

const opacityIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1.1);
  }
`

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);

  display: ${props => (props.open ? 'block' : 'none')};

  animation-name: ${opacityIn};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1;
`

// width: 65%;
// min-width: 15em;
const Modal = styled.div`
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  background: #fafafa;
  padding: 0.8em;
  font-weight: 300;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0.2em;
  z-index: 1;

  animation-name: ${scaleIn};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  transform: scale(1.1);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7em;
`

const IconButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  width: 1.3em;
  line-height: 1em;
  cursor: pointer;
  outline: none;
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    transform: scale(1.1) rotate(180deg);
  }
`

const ModalBox = ({open, onClose, children}) => (
  <Wrapper open={open}>
    <Backdrop open={open} onClick={onClose} />
    <Modal open={open}>
      <Header>
        <span>Create a Project</span>
        <IconButton onClick={onClose}>
          <Icon i="close" fill="#333" />
        </IconButton>
      </Header>
      {children}
    </Modal>
  </Wrapper>
)

export default ModalBox
