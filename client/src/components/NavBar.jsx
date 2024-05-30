import React, { useContext } from 'react'
import { ThemeContext } from './../context/theme.context'
import { AuthContext } from './../context/auth.context'
import { Link } from 'react-router-dom'

function NavBar() {

    const { toggleTheme } = useContext(ThemeContext)

    const {
        isLoggedIn,
        user,                   // <== UPDATE
        logOutUser              // <== UPDATE
    } = useContext(AuthContext);

    return (
        <nav>
            <div className='left'>
                {isLoggedIn ? <>
                    <Link to={`/fruits`}>List Fruits</Link>
                    <button onClick={logOutUser}>Log Out</button>
                </>
                    :
                    <>
                        <Link to={`/login`}>Login</Link>
                        <Link to={`/signup`}>Sign Up</Link>
                    </>
                }
            </div>
            <div className='right'>
                {isLoggedIn && <h3>Hello, {user.name}</h3>}

                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>

        </nav>
    )
}

export default NavBar