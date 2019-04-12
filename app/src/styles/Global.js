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
    .sr {
        position: absolute;
        left: -99999px;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
`;

export default Global;
