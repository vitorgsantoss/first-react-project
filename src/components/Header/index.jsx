import { Nav } from './styled';
import { FaHome, FaUser, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={'25px'} />
      </Link>
      <Link to="/register">
        <FaUser size={'20px'} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={'20px'} />
      </Link>
      {/* <p>{isLoggedIn ? 'logged' : 'sigin'}</p> */}
    </Nav>
  );
}
