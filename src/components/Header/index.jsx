import { Nav, ProfileIcon, DropdownMenu } from './styled';
import { FaHome, FaUser, FaSignInAlt, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import history from '../../services/history';
import { loginFailure } from '../../store/slices/auth';
import { toast } from 'react-toastify';

export default function Header() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleLoginButton(event) {
    event.preventDefault();
    if (!isLoggedIn) {
      history.push('/login');
    } else {
      dispatch(loginFailure());
      history.push('/');
      toast.success('User logged out');
    }
  }

  function handleLogout() {
    dispatch(loginFailure());
    setShowDropdown(false);
    history.push('/');
    toast.success('User logged out');
  }

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <Nav>
      <div />
      <div className='icons'>
        <Link to="/">
          <FaHome size={'25px'} />
        </Link>
        <Link to="/register">
          <FaUser size={'20px'} />
        </Link>
        {!user.id &&
          <Link to="/" onClick={handleLoginButton}>
            <FaSignInAlt size={'20px'} />
          </Link>
        }
      </div>
      
      <ProfileIcon ref={dropdownRef}>
        {user.id ? (
          <>
            <p onClick={toggleDropdown}>{user.nome[0].toUpperCase()}</p>
            {showDropdown && (
              <DropdownMenu>
                <div className="dropdown-header">
                  <strong>{user.nome}</strong>
                  <span>{user.email}</span>
                </div>
                
                
                <button className="logout" onClick={handleLogout}>
                  <FaSignOutAlt size={16} />
                  <span>Exit</span>
                </button>
              </DropdownMenu>
            )}
          </>
        ) : (
          ""
        )}
      </ProfileIcon>
    </Nav>
  );
}
