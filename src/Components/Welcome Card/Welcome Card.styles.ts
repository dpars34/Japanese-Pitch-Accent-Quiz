import styled, { keyframes } from 'styled-components'

export const WelcomeWrapper = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const buttonHover = keyframes`
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.03);
    }
`

export const WelcomeButton = styled.button`
    font-family: 'Cabin', sans-serif;
    font-size: 2rem;
    background-color: #9D2F2F;
    border: solid 1px #F8F8F8;
    width: 50vw;
    color: #F8F8F8;
    align-items: center;
    padding: 0.5em;
    margin: 0.5rem 0;
    border-radius: 15px;
    &:hover {
        animation: ${buttonHover} 0.3s forwards;
    }
`