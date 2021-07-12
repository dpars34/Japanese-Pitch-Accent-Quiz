import styled from 'styled-components'

export const ResultTitle = styled.h2<{ correct: boolean }>`
    color: ${props => props.correct ? "#33871e": "#871e33"};
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    height: 80px;
    padding: 1rem 1rem 2rem 1rem;
`