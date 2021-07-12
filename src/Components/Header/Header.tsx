import React from 'react'

import { HeaderWrapper, Navbar, NavLink, Link } from './Header.styles'

const Header = () => {
    return(
        <HeaderWrapper>
            <Navbar>
                <Link href="/"><NavLink>Home</NavLink></Link>
                <NavLink>About Pitch Accent</NavLink>
            </Navbar>
        </HeaderWrapper>
    )
}

export default Header