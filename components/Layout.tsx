// import styles from '../styles/Layout.module.css'
import Header from './Header'
import { Main } from '../styles/Layout'
type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div>
        <Main>
          {children}
        </Main>
      </div>
    </>
  )
}

export default Layout
