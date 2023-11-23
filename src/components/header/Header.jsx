import React from 'react';
import clsx from 'clsx';
import { FaOctopusDeploy } from 'react-icons/fa6';
import style from '../header/_Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import i from '../../../src/images/tour-logo.png';

console.log(i);
function Header({ onChangeTheme, currentTheme, toggleOpenModal }) {
  const StyledLink = styled(NavLink)`
    color: red;

    &.active {
      color: #ffa500;
    }
  `;
  const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 2px;
  `
  return (
    <header
      className={clsx(style.header, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <div className={style.container}>
        <div className="logo">
          <LogoLink to="/">
            <FaOctopusDeploy size={20}/>
            <p className={style['logo-name']}>
              <span className={style['logo-part']}>O</span>ctopus
            </p>
          </LogoLink>
        </div>

        <nav className={style.nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="about">About</StyledLink>
          <StyledLink to="tours">Tours</StyledLink>
        </nav>
        <div className={style.buttons}>
          <button
            name="currentTheme"
            className={style['theme-btn']}
            onClick={onChangeTheme}
          >
            {currentTheme}
          </button>
          <button
            className={style.logInBtn}
            name="logInBtn"
            onClick={toggleOpenModal}
          >
            <b>Log in</b>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
