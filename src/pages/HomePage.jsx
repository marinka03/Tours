import React from 'react';
import style from '../pages/_HomePage.module.scss'

function Home() {
  return (
    <>
      <h1>ITS HOME PAGE</h1>
      <div className={style['help-background']}>
        <div className={style['help-box']}>
        <span className={style['help-text']}>We help you break away from the travel struggles of yesterday to enjoy
        the exciting adventures of today.</span>
        </div>
      </div>
    </>
  );
}

export default Home;
