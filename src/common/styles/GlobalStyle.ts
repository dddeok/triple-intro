import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next {
        height: 100%;
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: sans-serif;    
    }

    div {
        box-sizing: border-box;
    }
`;
