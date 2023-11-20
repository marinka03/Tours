import React from 'react';
import clsx from 'clsx';
import style from '../header/_Header.module.scss';

function Header({ onChangeTheme, currentTheme, toggleOpenModal }) {
  return (
    <header
      className={clsx(style.header, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <span className={style.logo}>Logo</span>
      <nav className={style.nav}>
        <p className={style.favouriteTours}>Favourite tours</p>
        <p className={style.contactUs}>Contact us</p>
        <p className={style.home}>Home</p>
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
    </header>
  );
}

export default Header;
