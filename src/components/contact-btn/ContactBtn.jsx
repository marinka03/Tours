import clsx from 'clsx';
import React from 'react';
import style from '../contact-btn/_ContactBtn.module.scss';

function ContactBtn({ children, scrollToForm, currentTheme }) {
  return (
    <button
      onClick={scrollToForm}
      className={clsx(style['contact-btn'], {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <b>Contact now</b>
      {children}
    </button>
  );
}
export default ContactBtn;
