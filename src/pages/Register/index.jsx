import React, {useState} from 'react';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from '../../services/axios';
import history from '../../services/history';
import { get } from 'lodash';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('The name must be between 3 and 255 characters long.')
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('The password must be between 6 and 50 characters long.')
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('This email is invalid!')
    }

    if (formErrors) return;

    try{
      await axios.post('/users/', {
        nome:name, password, email
      });
      toast.success('User registered');
      history.push('/');

    } catch (e) {
      const errors = get(e, 'response.data.errors', []);
      
      errors.map(error => toast.error(error))
    }
  }
  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
      <label htmlFor="name" >Name:
        <input 
          type="text"  
          placeholder='Provide your name' 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email" >E-mail:
        <input 
          type="email"  
          placeholder='Provide your email' 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" >Password:
        <input 
          type="password"  
          placeholder='Provide your password' 
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>Create my account</button>
      </Form>
    </Container>
  );
}
