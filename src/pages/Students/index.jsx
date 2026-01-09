import React, {useEffect, useState} from 'react';
import { StudentsContainer, ProfilePicture } from './styled';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as colors from '../../config/colors';
import Loading from '../../components/Loading';

export default function Students() {

  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    async function getData(){
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setStudents(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading}/>
      <h1>Students</h1>
      
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
          <Link to={`/student/${student.id}/edit`}><FaEdit size={16} color={colors.primaryColor}/></Link>
          <FaWindowClose color={colors.primaryColor}/>
        </div>
       }
      )}
     </StudentsContainer>
    </Container>
  );
}
