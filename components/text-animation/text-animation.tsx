import React from "react";
import styled, {keyframes} from "styled-components";

export default function TextAnimation({text}: {text: string}) {

    const textChar = text?.split("");

    return(
        <Wrapper>
            {textChar.map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </Wrapper>
    )
}


const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
    25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    75% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    100% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
`

const Wrapper = styled.section`
    display: inline-block;
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-fill-mode: forward;
    }
    span:nth-child(1){
        animation-delay: 0.3s;
    }
    span:nth-child(2){
        animation-delay: 0.3s;
    }
    span:nth-child(3){
        animation-delay: 0.3s;
    }
    span:nth-child(4){
        animation-delay: 0.3s;
    }
    span:nth-child(5){
        animation-delay: 0.6s;
    }
    span:nth-child(6){
        animation-delay: 0.9s;
    }
    span:nth-child(7){
        animation-delay: 1.2s;
    }
    span:nth-child(8){
        animation-delay: 1.5s;
    }
    span:nth-child(9){
        animation-delay: 1.8s;
    }
    span:nth-child(10){
        animation-delay: 2.1s;
    }
    span:nth-child(11){
        animation-delay: 2.4s;
    }
    span:nth-child(12){
        animation-delay: 2.7s;
    }
    span:nth-child(13){
        animation-delay: 3s;
    }
    span:nth-child(14){
        animation-delay: 3.3s;
    }
`
