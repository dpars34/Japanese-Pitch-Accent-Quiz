import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    margin: 0;
`

export const Navbar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    gap: 2rem;
    padding-left: 5vw;
    background-color: #9D2F2F;
`

export const NavLink = styled.p`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Link = styled.a`
    color: #F8F8F8;
    text-decoration: none;
`