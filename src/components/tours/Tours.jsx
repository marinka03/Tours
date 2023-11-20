import React from 'react';
import clsx from 'clsx';
import { LuPhone } from 'react-icons/lu';

import tours from '../../../src/tours.json';

import TourItem from 'components/tour-item/TourItem';
import ContactBtn from 'components/contact-btn/ContactBtn';
import FeedbackForm from 'components/feedback-form/FeedbackForm';

import style from '../tours/_Tours.module.scss';

function Tours({ currentTheme, children }) {
  const scrollToForm = () => {
    window.scrollBy({ left: 0, top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={clsx(style.container, {
          [style.dark]: currentTheme === 'dark',
          [style.light]: currentTheme === 'light',
        })}
      >
        <p>Quantity</p>
        {children}
        <div className={style.wrapper}>
          <ul className={style.list}>
            {tours.map(el => (
              <TourItem {...el} key={el.id} currentTheme={currentTheme} />
            ))}
          </ul>
          <div className={style.contacts}>
            <p className={style['text-contact']}>
              Contact the manager for details
            </p>
            <ContactBtn scrollToForm={scrollToForm} currentTheme={currentTheme}>
              <LuPhone size={20} />
            </ContactBtn>
          </div>
          <FeedbackForm currentTheme={currentTheme}></FeedbackForm>
        </div>
      </div>
    </>
  );
}

export default Tours;
