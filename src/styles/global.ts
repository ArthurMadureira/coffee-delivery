import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
  }

  ul {
    list-style: none;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  input,
  button {
    outline: none;
  }
`
