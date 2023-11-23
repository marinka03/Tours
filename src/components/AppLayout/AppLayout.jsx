import clsx from 'clsx';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import LogIn from 'components/log-in/LogIn';
import React from 'react';
import { Outlet } from 'react-router-dom';

import style from '../AppLayout/_AppLayout.module.scss';

function AppLayout({ onChangeTheme, currentTheme, toggleOpenModal, visible }) {
  return (
    <>
      <div className={style['layout-container']}>
        <Header
          onChangeTheme={onChangeTheme}
          currentTheme={currentTheme}
          toggleOpenModal={toggleOpenModal}
        />

        {visible === true && (
          <LogIn toggleOpenModal={toggleOpenModal} visible={visible}></LogIn>
        )}
        <main
          className={clsx(style['main-container'], {
            [style.dark]: currentTheme === 'dark',
            [style.light]: currentTheme === 'light',
          })}
        >
          <div className={style.container}>
            <Outlet />
          </div>
        </main>

        <Footer currentTheme={currentTheme}></Footer>
      </div>
    </>
  );
}

export default AppLayout;
