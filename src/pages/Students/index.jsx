import React, {useEffect, useState} from 'react';
import { StudentsContainer, ProfilePicture } from './styled';
import { get } from 'lodash';
import { Container, Title } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as colors from '../../config/colors';
import Loading from '../../components/Loading';
import Confirmation from '../../components/Confirmation';
import { toast } from 'react-toastify';

export default function Students() {

  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [studentID, setStudentID] = useState(null)
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    async function getData(){
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setStudents(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  async function handleDelete () {
    setVisible(false);
    try{
      await axios.delete(`/alunos/${studentID}`);
      setStudents(students.filter(student => student.id !== studentID))
      toast.success('Studant deleted!')

    } catch {
      toast.error('Error during deletation!')
      
    }
  }

  return (
    <Container>
      <Confirmation visible={visible} onConfirm={handleDelete} onCancel={() => setVisible(false)}/>
      <Loading isLoading={isLoading}/>
      <Title>Students</Title>
      
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
          <FaWindowClose color={colors.primaryColor} onClick={() => {
            setStudentID(student.id);
            setVisible(true);
          }}/>
          
        </div>
       }
      )}
     </StudentsContainer>
    </Container>
  );
}
