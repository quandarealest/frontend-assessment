import styled from 'styled-components'

export const Nav = styled.nav`
  height: 5rem;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  ul li a {
    margin: 5px 15px;
  }
`