import React from 'react'
import styled, {keyframes} from 'react-emotion'

function genGradient({i, len}) {
  const a = Math.round(Math.random() * 360)
  const b = a + Math.round(Math.random() * 70)

  return `hsl(${a}, 97%, 56%), hsl(${b}, 97%, 56%)`
}

const rotateHue = keyframes`
  from {
    filter: hue-rotate(-10deg) drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.28));
  }

  to {
    filter: hue-rotate(30deg) drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.28));
  }
`

const NumberBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  font-size: 13em;
  font-weight: bold;
  text-align: center;
  font-family: bangli;

  word-wrap: break-word;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 6em;
  }
`

const Char = styled.div`
  background: -webkit-linear-gradient(45deg, ${genGradient});

  animation-duration: 1.8s;
  animation-name: ${rotateHue};
  animation-iteration-count: infinite;
  animation-easing-function: ease-in-out;
  animation-direction: alternate-reverse;

  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const RainbowText = ({value, onClick}) => {
  const text = value.toString()

  return (
    <NumberBox onClick={onClick}>
      {[...text].map((x, i) => (
        <Char key={i} i={i} len={text.length}>
          {x}
        </Char>
      ))}
    </NumberBox>
  )
}

export default RainbowText
