import styled from 'styled-components';
import { primaryColor, successColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  div {
    min-width: 33%;
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
  }
    
  .icons {
    justify-content: center;
  }
  
  a:nth-child(2) {
    margin: 0 20px;
  }
  
  a {
    color: #fff;
    font-weight: bold;
  }
`;

export const ProfileIcon = styled.div`
  width: 100%;
  display: flex;
  text-align: end;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 2px solid ${successColor};
    border-radius: 50%;
    margin-right: 30px;
    background: #fff;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  padding: 8px 0;
  z-index: 1000;
  animation: slideDown 0.2s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdown-header {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    
    strong {
      color: #333;
      font-size: 14px;
      margin-bottom: 4px;
    }
    
    span {
      color: #666;
      font-size: 12px;
    }
  }

  hr {
    margin: 8px 0;
    border: none;
    border-top: 1px solid #e0e0e0;
  }

  a, button {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border: none;
    background: none;
    color: #333;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s ease;
    font-weight: normal;

    &:hover {
      background: #f5f5f5;
    }

    svg {
      color: #666;
    }

    span {
      flex: 1;
      text-align: left;
    }
  }

  .logout {
    color: #d32f2f;
    padding-right: 30px;
    
    svg {
      color: #d32f2f;
    }
  }
`;
