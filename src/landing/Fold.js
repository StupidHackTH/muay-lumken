import React from 'react'
import styled from 'react-emotion'
import {keyframes} from 'emotion'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import Particles from 'react-particles-js'

import heroImage from '../../assets/hero.svg'

import {Break, More} from './Layout'

import {md, xs} from '../ui/style'

export const FoldSection = styled.section`
  position: relative;
  height: 80vh;
`

export const Intro = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 3;

  padding: 0.8em;
  width: 90%;
  text-align: left;
  pointer-events: none;

  @media screen and (max-width: ${md}px) {
    top: 25%;
  }

  @media screen and (max-width: ${xs}px) {
    top: 20%;
  }
`

const blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// text-shadow: 0px 1px 3px rgba(0,0,0,0.3);
export const Heading = styled.h1`
  margin: 0;
  line-height: 1.3em;
  color: white;
  font-size: 2.5em;
  font-weight: 300;

  @media screen and (max-width: ${md}px) {
    font-size: 2em;
  }

  @media screen and (max-width: ${xs}px) {
    font-size: 1.4em;
  }

  > span > .Typist > .Cursor {
    display: inline-block;
  }

  > span > .Typist > .Cursor.Cursor--blinking {
    opacity: 1;
    animation: ${blinking} 1s linear infinite;
  }
`

export const SubHeading = styled.h2`
  color: white;
  margin-top: 1em;
  font-size: 1.1em;
  line-height: 1.6em;
  font-weight: 300;

  @media screen and (max-width: ${md}px) {
    font-size: 1.05em;
  }

  @media screen and (max-width: ${xs}px) {
    font-size: 1em;
  }
`

const Banner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: skewY(-12deg);
  transform-origin: 0;
  background: linear-gradient(45deg, hsl(283, 46%, 41%), hsl(241, 100%, 82%));
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`

export const HeroImg = styled.img`
  position: absolute;
  bottom: 2px;
  left: 80%;
  pointer-events: visiblefill;
  transform: translate(-50%, -15%) rotate(-42deg);
  transform-origin: 0px;
  width: 24%;
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.18));
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;
  mix-blend-mode: luminosity;
  cursor: pointer;

  &:hover {
    mix-blend-mode: initial;
    transform: translate(-50%, -15%) rotate(-42deg) scale(1.05);
  }

  @media screen and (max-width: 600px) {
    transform: translate(-62%, 10%) rotate(-42deg);
    transform-origin: 0px;
    width: 36%;

    &:hover {
      transform: translate(-62%, 10%) rotate(-42deg) scale(1.05);
    }
  }
`

const particle = {
  style: {
    position: 'absolute',
    top: 0,
  },
  params: {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
    },
  },
}

// TODO: Developers, Entrepreneurs and Makers
const Fold = () => (
  <FoldSection>
    <Banner />
    <Particles {...particle} />
    <Intro>
      <Heading>
        <TypistLoop interval={3000}>
          <Typist>
            Turn Amazing Ideas into Magical Solutions&nbsp;
            <Break stop={768} />
            with Axi Platform
          </Typist>
        </TypistLoop>
      </Heading>
      <SubHeading>
        With Physical Web, Cloud Microservices, and Internet of Things,&nbsp;
        <Break stop={550} />
        Axi joins you to develop innovative products.
      </SubHeading>
      <More text="Try the Demo" color="#ffffff" link="/dashboard" />
    </Intro>
    <HeroImg src={heroImage} alt="" />
  </FoldSection>
)

export default Fold
