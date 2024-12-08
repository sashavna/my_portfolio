import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const Globalstyle = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Epilogue", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1,4;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    ol {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg}
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg}
    }
`