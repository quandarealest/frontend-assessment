import styled from 'styled-components'

export const PostListWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`

export const ButtonWrapper = styled.div<{ position?: string, isMobile?: boolean }>`
  width: 100%;
  display: flex;
  ${props => props.isMobile && `
    display: none;
  `}
  align-items: center;
  justify-content: ${props => props.position === 'right' ? 'right' : 'left'};
  button {
    border: unset;
    background-color: inherit;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
    ${props => props.isMobile && `
      display: flex;
      justify-content: center;
    `}
  }
`

export const Card = styled.a`
  margin: 1rem;
  flex-basis: 50%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-height: 15rem;
  height: 100%;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    color: #0070f3;
    border-color: #0070f3;
  }

  h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  }

  p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  }
  @media (max-width: 1440px) {
    width: 100%;
    flex-basis: 45%;
    max-height: 17rem;
    line-height: 1;
    padding: 1rem;
    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
  flex-basis: 100%;
    flex-direction: column;
        padding: 1.5rem;
    h3 {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 375px) {
    p {
      font-size: 0.75rem;
    }
  }
`
