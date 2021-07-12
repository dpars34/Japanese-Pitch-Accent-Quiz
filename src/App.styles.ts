import styled, { createGlobalStyle, keyframes } from 'styled-components' 

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        
    }

    body {
        background-color: #9D2F2F;
        font-family: 'Cabin', sans-serif;
        color: #F8F8F8;
        margin: 0;
    }
`

export const MainTitle = styled.h1`
    text-align: center;
    margin-top: 7rem;
    font-family: 'Fugaz One', cursive;
    font-size: 4rem;
    padding: 1rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: #242424;
`

export const CardWrapper = styled.div<{ margin: boolean }>`
    margin: ${props => props.margin ? "5" : "3"}rem 10vw;
    padding: 1rem 1rem 4rem 1rem;
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Text = styled.p`
    color: #242424;
    font-weight: 400;
    padding: 0.5rem;
    text-align: center;
`

export const TextTitle = styled.p`
    font-weight: 600;
    font-style: italic;
    color: #242424;
    padding: 0.5rem;
    text-align: center;
`

const buttonHover = keyframes`
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.03);
    }
`

export const Button = styled.button`
    font-family: 'Cabin', sans-serif;
    width: 50vw;
    color: #242424;
    align-items: center;
    background-color: #FFFFFF;
    border: solid 1px #242424;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 15px;
    &:hover {
        animation: ${buttonHover} 0.3s forwards;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20vw;
`

export const LinkText = styled.p`
    text-align: center;
    color: #242424;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const LinkTextWhite = styled.p`
    text-align: center;
    color: #F8F8F8;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`