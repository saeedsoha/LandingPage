import styled from 'styled-components'
import { keyframes } from 'styled-components'


const animation = keyframes`
    0% {opacity: 0; transform: translateY(-50px) rotate(180deg) ;  }
    100% {opacity: 1; transform: translateY(0) rotate(0) ;  }
`

export const BackToContainer = styled.div`
    display: ${({activeDisplay}) => (activeDisplay ? 'block' : 'none')} ;
    background: #01BF71;
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    margin: 0 auto;
    z-index: 1000;
    cursor: pointer;
    transition: all 0.5s ease-out; 
    animation-name: ${animation};
    animation-duration: 1s;
    

`
export const BacktoTopIcon = styled.div`
    font-size: 1.3rem;
    padding: .9rem 1rem;
`