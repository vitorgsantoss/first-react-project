import React, {useEffect, useState} from 'react';
import { Title, StudentsContainer, ProfilePicture } from './styled';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as colors from '../../config/colors';

export default function Login() {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    async function getData(){
      const response = await axios.get('/alunos');
      setStudents(response.data)
    }
    getData();
  }, []);
  return (
    <Container>
      <Title>Students:</Title>
      
     <StudentsContainer>
       {students.map(student => {
        return <div key={student.id}>
          <ProfilePicture>
            {get(student, 'Fotos[0].url', false) ? (
              <img src={student.Fotos[0].url} alt="" />
            ) : (
              <FaUserCircle size={36}/>
            )
          }
          </ProfilePicture>
          <span className='name'>{student.nome}</span>
          <span className='email'>{student.email}</span>
          <Link to={`/aluno/edit${student.id}`}><FaEdit size={16} color={colors.primaryColor}/></Link>
          <FaWindowClose color={colors.primaryColor}/>
        </div>
       }
      )}
     </StudentsContainer>
    </Container>
  );
}
