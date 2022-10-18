import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-bottom: 1rem;

  input:focus {
    outline: 1px solid ${(props) => props.theme['yellow-700']};
  }

  &.street input {
    width: 100%;
  }

  &.grid-1 {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
  }

  &.place-infos {
    display: grid;
    align-items: center;
    grid-template-columns: 25% 50% 20.5%;
    max-width: 100%;
  }

  input {
    background: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-700']};
    border-radius: 4px;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
