import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './HeaderStyled'


const Header = () => {
    const loginOut = false

  return (
    <HeaderContainer>
        {
            loginOut
            ? <Link to="/logout">Logout</Link>
            : <Link to="/login">Login</Link>
        }

    </HeaderContainer>
  )
}

export default Header