import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

export const DateInfo = styled.div`
  color: #666;
`

export const ItemWrapper = styled.div`
  display: flex;
  padding: 10rem 10rem;
  @media (max-width: 768px) {
    padding: 3rem 3rem;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
`

export const DateAndAuthorWrapper = styled.div`
  display: inline-box;
  width: 100%;
  @media (max-width: 1024px) {
    display: block;
  }
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5rem;
`

export const CommentsWrapper = styled.div`
  display: block;
`

export const CommentCard = styled.div`
  margin: 1rem 1rem 1rem 0rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  max-height: 15rem;
  height: 100%;

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
  }

  @media (max-width: 768px) {
  flex-basis: 100%;
    flex-direction: column;
      padding: 1.5rem;
  }
  
  @media (max-width: 375px) {
    max-height: 20rem;
    p {
      font-size: 0.75rem;
    }
  }
`

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  h4 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  }
  span {
    color: #666;
    margin: 0.2rem 0;
    font-size: 0.7rem;
  }
  @media (max-width: 1440px) {
    h4 {
      font-size: 1.2rem;
    }
  }
`