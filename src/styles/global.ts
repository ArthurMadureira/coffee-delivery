import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    overflow-x: hidden;
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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  inpuy[type="number"] {
    -moz-appearance: textfield;
  }
`
