import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

    body {
        background: #006699;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
    }
`;

export default Global;
