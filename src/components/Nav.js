import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import classNames from 'classnames';

const Nav = ({ classNames }) => {
  return (
    <MainNav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item">
          <Link activeClassName="current" to="/">
            Home
          </Link>
        </li>
        <li className="main-nav__list-item">
          <Link activeClassName="current" to="/about">
            About
          </Link>
        </li>
        <li className="main-nav__list-item">
          <Link activeClassName="current" to="/quote">
            Request a Quote
          </Link>
        </li>
      </ul>
    </MainNav>
  );
};

const MainNav = styled.nav`
  margin: 2rem 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  }
  li {
    :last-child {
      a {
        color: ${({ theme }) => theme.red};
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.font.bold};
    margin: 1rem 0;
    display: block;

    &.current {
      border-bottom: 2px solid;
    }
  }
`;

export default Nav;
