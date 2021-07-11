import styled from 'styled-components'

export const ResultTitle = styled.h2<{ correct: boolean }>`
    color: ${props => props.correct ? "#33871e": "#871e33"};
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
`