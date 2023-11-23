import styled, {keyframes} from 'styled-components'

export const slide = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`;

export const ButtonAnimate = styled.button`
    padding: 10px;
    border: 2px solid blue;
    border-radius: 4px;
    background: transparent;
    animation: ${slide} 8s ease-in-out 2s;
    color: rgb(140, 70, 226);
    fontSize: 25px
  `;
export const ButtonStyle =styled.div`
    color: rgb(140, 70, 226);
    margin: 20px;
`;

export const Heading = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;