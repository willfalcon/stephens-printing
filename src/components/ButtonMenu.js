import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import classNames from 'classnames';

const ButtonMenu = ({ className }) => {
  return (
    <StyledButtonMenu className={classNames('button-menu', className)}>
      <ul className="button-menu__list">
        <li className="button-menu__item">
          <Link to="/">Home</Link>
        </li>
        <li className="button-menu__item">
          <Link to="/about">About</Link>
        </li>
        <li className="button-menu__item red-bg">
          <Link to="/quote">Request a Quote</Link>
        </li>
      </ul>
    </StyledButtonMenu>
  );
};

const StyledButtonMenu = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    background: ${({ theme }) => theme.dark};
    border-left: 1px solid white;
    border-right: 1px solid white;
    :first-child {
      border-left: 0;
    }
    :last-child {
      border-right: 0;
    }
    flex-grow: 1;
    text-align: center;
    &.red-bg {
      background: ${({ theme }) => theme.red};
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      padding: 1rem;
      display: block;
      width: 100%;
    }
  }
`;

export default ButtonMenu;
