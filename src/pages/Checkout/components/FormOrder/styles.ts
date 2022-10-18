import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-100']};

  header {
    margin-bottom: 2rem;

    h2 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }

    p {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`
