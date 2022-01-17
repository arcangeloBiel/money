import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
--background: #f0f2f5;
--red: #e52e4d;
--blue: #5429cc;

--blue-light: #6933ff;

--text-title: #363f5f;
--text-body: #969CB3;
--shape: #FFFFFF;
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

//fonte da aplicação 16px (Desktop)
html {
    @media(max-width: 1080px) {
    font-size: 93.75% //calculo 16x0,9375 = 15px
    }
    @media(max-width: 720px) {
    font-size: 87.5% //calculo 16x0,875 = 14px
    }
}


body {
background: var(--background);
-webkit-font-smoothing: antialiased;
}

body, input, textarea , button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400
}
h1,h2,h3,h4,h5, strong {
font-weight: 600
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;