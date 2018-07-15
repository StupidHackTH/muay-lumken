import React, {Component} from 'react'
import styled, {css, keyframes} from 'react-emotion'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const Perspective = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  height: 100%;
  position: relative;
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:hover {
    transform: scale(1.08);
  }
`

export const rollIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotateX(55deg) rotateY(0deg) rotateZ(50deg) translateZ(1px);
  }
`

const GridArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  position: relative;
  background: white;
  width: 23em;
  height: 23em;
  margin: 0 auto;

  animation-name: ${rollIn};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  transform: rotateX(55deg) rotateY(0deg) rotateZ(${props => props.deg || 0}deg)
    translateZ(1px);

  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Vert = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 600px;
`

const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 100%;
  width: 100%;
  min-height: 3.3em;
  font-size: 2em;
  font-family: bangli;
  color: #555;
  position: relative;
  user-select: none;
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transform: translateZ(100px);
    transform-style: preserve-3d;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
      0 5px 15px rgba(0, 0, 0, 0.07);
    background: linear-gradient(45deg, #00ffa1, aqua);
    color: white;
    border: 3px solid white;
  }
`

// ${'' /* transform: rotateX(180deg) translateZ(-100px); */}

const rotatingCircle = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`

// prettier-ignore
const AlchemistCircle = styled.div`
  position: absolute;
  top: -4em;
  bottom: 0;
  left: -4em;
  right: 0;
  width: 30em;
  height: 30em;
  z-index: 0;
  opacity: 0.5;
  pointer-events: none;
  background-image: url('http://upload.wikimedia.org/wikipedia/commons/1/1b/Alchemic_Circle_FMA_Element.svg');
  background-size: cover;

  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-direction: alternate;

  transition: all 1s ease-in-out;
  transform: rotateZ(${props => props.deg || 0}deg);
`

const IV = styled.span`
  font-family: bangli;

  color: ${props =>
    props.deg === props.flag
      ? 'blue'
      : props.deg > props.flag
        ? 'red'
        : 'green'};
`

const GameGrid = ({flag, deg, areas, spinning, onClick}) => (
  <Perspective>
    <GridArea deg={deg}>
      <AlchemistCircle spinning={spinning} />

      {areas.map((area, y) => (
        <Vert key={y}>
          {area.map((num, x) => (
            <Area key={x} onClick={() => onClick(x, y)}>
              {num}
              {x === 1 &&
                y === 1 && (
                  <IV deg={deg} flag={flag}>
                    <br />
                    {deg}
                  </IV>
                )}
            </Area>
          ))}
        </Vert>
      ))}
    </GridArea>
  </Perspective>
)

const flags = [...Array(361)].map((_, i) => i).filter(i => i % 20 === 0)

class Alchemy extends Component {
  state = {
    loading: true,
    intro: false,
    ready: false,
    index: 0,
    deg: 0,
    answers: [],
    areas: [['', 'เหนือ', ''], ['ตก', 'กลาง', 'ออก'], ['', 'ใต้', '']],
    flag: flags[Math.floor(Math.random() * 19)],
  }

  componentDidUpdate(props) {
    const {spinning} = this.props

    let timer = 0
    let times = 5

    if (props.spinning !== spinning) {
      if (spinning) {
        times = 5

        timer = setInterval(() => {
          if (times > 5) {
            return clearInterval(timer)
          }

          this.setState({deg: Math.round(Math.random() * 360)})

          times++
        }, 800)
      } else {
        clearInterval(timer)
        this.setState({deg: 0})
      }
    }
  }

  handleTurn = (x, y) => {
    const {areas, deg, flag} = this.state
    const num = areas[y][x]

    console.info(x, y, num)

    if (num === 'X') {
      this.setState({deg: deg + 20, areas})
    } else if (num === 'เหนือ') {
      this.setState({deg: deg - 20, areas})
    } else if (num === 'ใต้') {
      this.setState({deg: deg + 100, areas})
    } else if (num === 'ออก') {
      this.setState({deg: deg - 100, areas})
    } else if (num === 'ตก') {
      this.setState({deg: deg + 50, areas})
    }
  }

  render() {
    const {spinning} = this.props
    const {deg, flag, areas} = this.state

    return (
      <GameGrid
        deg={deg}
        flag={flag}
        areas={areas}
        spinning={spinning}
        onClick={this.handleTurn}
      />
    )
  }
}

export default Alchemy
