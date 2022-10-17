import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-100']};

  header {
    margin-bottom: 2rem;

    p {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`
