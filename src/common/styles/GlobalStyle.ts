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
        font-family: sans-serif;    
    }
`;
