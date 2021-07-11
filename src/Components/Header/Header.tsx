import React from 'react'

import { HeaderWrapper, Navbar, NavLink } from './Header.styles'

const Header = () => {
    return(
        <HeaderWrapper>
            <Navbar>
                <NavLink>About This Quiz</NavLink>
                <NavLink>About Pitch Accent</NavLink>
            </Navbar>
        </HeaderWrapper>
    )
}

export default Header