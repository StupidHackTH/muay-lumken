import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import styled from 'react-emotion'

import Paper from '../ui/Paper'

import RuleEngine from './rule'
import store from './store'

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 0.5em;

  font-family: bangli;
  font-size: 4.5em;

  background: linear-gradient(45deg, #ed1c24, #fcee21);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Input = styled.input`
  font-size: 4.5em;
  font-family: bangli;
  background: transparent;
  color: #ed1c24;
  border: none;
  border-bottom: 2px solid #2d2d30;
  width: 5em;
  outline: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  max-width: 850px;
`

const Card = styled(Paper)`
  width: 100%;
  padding: 0.5em;
  margin-top: 1.5em;
  font-family: bangli;
  font-size: 2.9em;
`

const Red = styled.span`
  background: linear-gradient(45deg, #ed1c24, #fcee21);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

@observer
export default class Checker extends Component {
  @observable result = {}

  componentDidMount() {
    this.result = RuleEngine.parse(store.number)
  }

  setNumber = e => {
    const number = e.target.value

    console.log(number)

    store.number = number
    this.result = RuleEngine.parse(number)
  }

  render() {
    const result = this.result

    return (
      <Container>
        <Heading>วิเคราะห์เบอร์มงคล</Heading>
        <Input value={store.number} onChange={this.setNumber} />

        {result.isNegative && (
          <Card>
            <span>
              เบอร์ {store.number} เป็น<Red>เบอร์อัปมงคล</Red> ควรเลิกใช้ทันที
              เพราะ
              {result.negativeReason.map(reason => (
                <span key={reason.trait}>
                  มี<Red>เลข {reason.number}</Red> ซึ่งเป็น<Red>
                    เลข{reason.desc}
                  </Red>
                </span>
              ))}
            </span>
          </Card>
        )}

        {result.sum && (
          <Card>
            <span>
              เบอร์นี้มีผลรวมคือ <Red>{result.sum} </Red>
              {result.sumResult ? (
                <span>
                  ซึ่งเลขนี้มีนัยยะสำคัญทางไสยศาสตร์​และโหราศาสตร์ คือ{' '}
                  <Red>{result.sumResult}</Red>
                </span>
              ) : (
                <span>แต่เลขนี้ไม่มีนัยยะสำคัญทางไสยศาสตร์</span>
              )}
            </span>
          </Card>
        )}

        {result.match &&
          result.match.map(item => (
            <Card key={item.trait}>
              <span>
                เบอร์นี้เป็นเบอร์ที่ <Red>{item.desc}</Red> เพราะมีเลข{' '}
                <Red>{item.reason.join(' ')}</Red> x{item.count}
              </span>
            </Card>
          ))}

        {result.occupations && (
          <Card>
            <span>
              เบอร์นี้เหมาะสมสำหรับอาชีพเหล่านี้:
              <small>
                {result.occupations.map(item => (
                  <div key={item.trait}>
                    <Red>{item.desc}</Red> (เลข {item.reason.join(' ')}) x{
                      item.count
                    }
                  </div>
                ))}
              </small>
            </span>
          </Card>
        )}
      </Container>
    )
  }
}
