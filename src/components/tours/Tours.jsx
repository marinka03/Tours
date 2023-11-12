import React from 'react';
import clsx from 'clsx';
import style from '../tours/Tours.module.css';

const TOURS = [
  {
    id: 1,
    name: 'Thai Adventure',
    price: '1,299',
    days: '18 or 25 days',
    description: 'Beaches, culture, elephants, parties, trekking and more!',
    details:
      "Looking for the ultimate trip to Thailand? Look no further! Discover the best bits of Thailand, from the lush jungles of the north to the dazzling beaches of the south. With multiple locations, loads of included activities and hip hostel accommodation, it's incredible value too!",
  },
  {
    id: 2,
    name: 'The Ultimate Gap Year',
    price: '6,499',
    days: '3 to 12 months',
    description: "It's a bucket-list blockbuster!",
    details:
      "Taking a gap year? Postponing uni? We've got the perfect trip for you! Discover Thailand, Vietnam, Bali and Australia with the perfect mix of group and independent travel. Combine fun in the sun with a working holiday and add on extra destinations to build your dream package!",
  },
  {
    id: 3,
    name: 'Sri Lanka Adventure',
    price: '1,249',
    days: '12 or 16 days',
    description: 'Temples, trains and turtles in Sri Lanka!',
    details:
      'Discover beautiful Sri Lanka on this unforgettable 12-day adventure! Explore stunning sights including Sigiriya Rock and Udawalawe National Park, and enjoy awesome inclusions, such as a whale-watching cruise and a curry cooking class.',
  },
  {
    id: 4,
    name: 'Italian Escape',
    price: '923',
    days: '6, 10 or 15 days ',
    description: 'History, food & culture',
    details:
      'Explore the highlights of incredible Italy on this fabulous tour filled with food, history and fun! Tailor the trip to your requirements with three different trip lengths to choose from.',
  },
];

function Tours({ currentTheme }) {
  return (
   <>
    
    <div
      className={clsx(style.container, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
     
      <p>Quantity</p>
      <ul className={style.list}>
        {TOURS.map(({ id, name, price, days, description }) => (
          <li key={id} className={style.card}>
            <h2 className={style.title}>Name: {name}</h2>
            <h3 className={style.days}>Days: {days}</h3>
            <h3 className={style.price}>Price: from £{price}</h3>
            <p className={style.description}>Description: {description}</p>
          </li>
        ))}
      </ul>
    </div></>
  );
}

export default Tours;
