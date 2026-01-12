import styled from 'styled-components';
import * as colors from '../../config/colors'

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label{
    margin: 15px 0 0 10px;
  }

  input{
    heigth: 40px;
    font-size: 16px;
    border: 1px solid #ddd;
    padding: 5px 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus{
      border: 1px solid ${colors.primaryColor};
    }
  }
  
  button{
    margin-top: 20px
  }
  
  
`;
