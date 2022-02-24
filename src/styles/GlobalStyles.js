import { createGlobalStyle, css, keyframes } from "styled-components";
import { variables } from "./Variables";
import { animations } from "./Animations";

// hsl(196, 93%, 95%)
// #F0F7FF
// #EDFBFD

const GlobalStyles = createGlobalStyle`
${variables}
html {
    box-sizing: border-box;
    font-size: 50%;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
body {
    background: white;
    font-size: 2.25rem;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
    display: block;
    width: 100%  
}

svg {
    display: block;
}

.svgIcon{
    max-width: 100%;
}

.hero__body {
    @media only screen and (max-width: 800px){
        text-align: center;
    }
}

.hero__body__headline {
    font-size: clamp(3.25rem , 3vw, 7rem);
    margin-bottom: 4rem;
}
.hero__body__subhead {
    font-size: clamp(2rem, 1.25vw, 3.25rem);
    margin-bottom: 4rem;
}
.attribution {
    text-align: center;
  }

.hero .cta__wave-bottom  {
    width: 400vw;
    height: 20rem;
    position: absolute;
    bottom: 0;
    @media(max-width: 700px){
        height: 5rem;
    }
}

.hero .cta__wave-bottom path {
    fill: #F0F7FF;
}


.odd .cta__wave-bottom {
    width: 400vw;
    height: 20rem;
    position: absolute;
    bottom: 0;
    left: 0;
    @media(max-width: 700px){
        height: 10rem;
    }
}

.odd .cta__wave-bottom path {
    fill: white;
}

.even .cta__wave-bottom {
    width: 400vw;
    height: 20rem;
    position: absolute;
    bottom: 0;
    left: 0;
    @media(max-width: 700px){
        height: 10rem;
    }
}

.even .cta__wave-bottom path {
    fill: #F0F7FF;
}





${animations}


`;

export default GlobalStyles;
