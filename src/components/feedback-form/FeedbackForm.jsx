import clsx from 'clsx';
import React from 'react';
import style from '../feedback-form/_FeedbackForm.module.scss';

function FeedbackForm({ currentTheme }) {
  return (
    <form
      action="submit"
      className={clsx(style.form, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <p>
        Leave your phone number.<span> Our manager will contact you.</span>
      </p>
      <input
        className={style.phone}
        type="tel"
        name="phone"
        id=""
        placeholder="Phone number..."
      />
      <button className={style['send-btn']}>
        <b>Send</b>
      </button>
    </form>
  );
}

export default FeedbackForm;
