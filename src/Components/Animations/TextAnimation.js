import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

export default function TextAnimation() {

    const reactArray = "Virtual Banking made Easy".split(" ")

    return (
        <Wrapper>{reactArray.map((item, index) => (
            <span key={index}>{item } </span>
        ))}</Wrapper>
    )
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotate(30deg) ; filter: blur(10px) }
    25% {opacity: 1; transform: translateY(0) skewX(0) skewY(0) rotate(0) ; filter: blur(0) ; }
    75% {opacity: 1; transform: translateY(0) skewX(0) skewY(0) rotate(0) ; filter: blur(0) ; }
    100% {opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotate(30deg) ; filter: blur(10px) ; }
`

const Wrapper = styled.span`
    display: inline-block;
    span {
        animation-name: ${animation};
         animation-duration: 6s;
         animation-fill-mode: forwards;
         animation-iteration-count: infinite;
    }
    span:nth-child(1){
        animation-delay: 0.1s;
    }
    span:nth-child(2){
        animation-delay: 0.2s;
    }
    span:nth-child(3){
        animation-delay: 0.3s;
    }
    span:nth-child(4){
        animation-delay: 0.4s;
    }

`