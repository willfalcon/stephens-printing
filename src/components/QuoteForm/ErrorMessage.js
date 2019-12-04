import React from 'react'
import styled from 'styled-components';

const ErrorMessage = ({ error }) => {
    switch (error.type) {
        case "required": 
            return <StyledError>This field is required!</StyledError>;
        default: 
          return <StyledError>THis field is required!</StyledError>;
    }
}

const StyledError = styled.p`
  color: ${({ theme }) => theme.red};
`;

export default ErrorMessage;