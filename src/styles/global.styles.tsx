import { createGlobalStyle } from "styled-components";
import { Typography } from "./typography.styles";

export const GlobalStyle = createGlobalStyle`
    /* Fonts */
    ${Typography}
    
    html,
    body{
        padding: 0;
        margin: 0;
        font-family: 'Glory', sans-serif;
    }

    a{
        color: inherit;
        text-decoration: none;
        display: inline-flex;
        cursor: pointer;
    }

    button{
        cursor: pointer;
    }

    *{
        box-sizing: border-box;
        margin: 0;
    }

`