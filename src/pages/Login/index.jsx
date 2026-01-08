import React from 'react';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import { useDispatch } from 'react-redux';
import { buttonClickedRequest } from '../../store/slices/auth';

export default function Login() {
  const dispatch = useDispatch();
  const handleClick = () => {
    toast.success('Clicado com sucesso');
    dispatch(buttonClickedRequest());
  };

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/actors/');
      console.log(response);
    }
    getData();
  }, []);

  return (
    <Container>
      <Title>Login:</Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
