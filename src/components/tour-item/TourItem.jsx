import React from 'react';
import clsx from 'clsx';
import style from '../tour-item/TourItem.module.css';

function TourItem({ id, name, price, days, description, currentTheme }) {
  return (
    <li
      className={clsx(style.card, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <h2 className={style.title}>Name: {name}</h2>
      <h3 className={style.days}>Days: {days}</h3>
      <h3 className={style.price}>Price: from £{price}</h3>
      <p className={style.description}>Description: {description}</p>
    </li>
  );
}
export default TourItem;
