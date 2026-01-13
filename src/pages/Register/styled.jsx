import styled from 'styled-components';
import * as colors from '../../config/colors'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
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
`;

export const NewStudentLink = styled(Link)`
  display: flex;
  justify-content: end;
  color: ${colors.primaryColor};
  margin-bottom: 5px;
  font-size: 15px
`;
