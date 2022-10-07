import { TypeAnimation } from 'react-type-animation';
import { Nav } from '../styles/Header'

const Header = () => {
  const today = new Date()
  const curHr = today.getHours()
  return (
    <Nav>
      {curHr < 12 ? (
        <TypeAnimation
          sequence={[
            'good morning 🌕',
          ]}
          wrapper="div"
          cursor={true}
          className="headingMd"
          style={{ fontSize: '1em' }}
        />
      ) : (
          <>
            {curHr < 18 ? (
              <TypeAnimation
                sequence={[
                  'good afternoon 🌓',
                ]}
                wrapper="div"
                cursor={true}
                className="headingMd"
                style={{ fontSize: '1em' }}
              />
            ) : (
                <TypeAnimation
                  sequence={[
                    'good evening 🌒',
                  ]}
                  wrapper="div"
                  cursor={true}
                  className="headingMd"
                  style={{ fontSize: '1em' }}
                />
              )}
          </>)}
    </Nav>
  )
}

export default Header
