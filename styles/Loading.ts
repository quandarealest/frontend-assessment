import styled, { keyframes } from 'styled-components'

const Swing = keyframes`
    50% {
    transform: rotate(-3deg);
  }
`

const SteamLarge = keyframes`
  0% {
    stroke-dashoffset: 13;
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: 39;
    opacity: 0;
  }
`

const SteamSmall = keyframes`
    10% {
    stroke-dashoffset: 9;
    opacity: 0.6;
  }
  80% {
    stroke-dashoffset: 27;
    opacity: 0;
  }
  100% {
    stroke-dashoffset: 27;
    opacity: 0;
  }
`

export const LoadingBody = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export const LoadingInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Tea = styled.svg`
  --secondary: #000;
`

export const TeaBag = styled.svg`
  path {
      transform-origin: top center;
  transform: rotate(3deg);
  animation: ${Swing} 2s infinite;
  }
`

export const SteamL = styled.svg`
  path {
      stroke-dasharray: 13;
  stroke-dashoffset: 13;
  animation: ${SteamLarge} 2s infinite;
  }
`

export const SteamR = styled.svg`
    stroke-dasharray: 9;
  stroke-dashoffset: 9;
  animation: ${SteamSmall} 2s infinite;
`