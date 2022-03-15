import styled from 'styled-components'


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

`
export const BacktoTopIcon = styled.div`
    font-size: 1.3rem;
    padding: .9rem 1rem;
`