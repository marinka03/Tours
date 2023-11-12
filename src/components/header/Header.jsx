import React from 'react';
import clsx from 'clsx';
import style from '../header/Header.module.css';

function Header({ onChangeTheme, currentTheme, onClickLogIn }) {
  // console.log(onClickLogIn);
  return (
    <header
      className={clsx(style.header, {
        [style.dark]: currentTheme === 'dark',
        [style.light]: currentTheme === 'light',
      })}
    >
      <span className={style.logo}>Logo</span>
      <nav className={style.nav}>
        <p className={style.home}>Home</p>
        <p className={style.favouriteTours}>Favourite tours</p>
        <p className={style.contactUs}>Contact us</p>
      </nav>
      <button
        name="currentTheme"
        className={style['theme-btn']}
        onClick={onChangeTheme}
      >
        Current theme: {currentTheme}
      </button>
      <button className={style.logInBtn} name='logInBtn' onClick={onClickLogIn}>Log in</button>
    </header>
  );
}

// class Header extends Component {
//   state = {
//     currentTheme: 'light'
//   };
//   onClick = (e) => {
//     console.dir(e.target.name)
//     this.setState({[e.target.name]: this.state.currentTheme==='dark'?'light':'dark'})
//   };

//   render() {
//     const {currentTheme} = this.state
//     console.log(this.state)
//     return (
//       <header
//         className={clsx(style.header, {
//           [style.dark]: currentTheme === 'dark',
//           [style.light]: currentTheme === 'light',
//         })}
//       >
//         <span className={style.logo}>Logo</span>
//         <nav className={style.nav}>
//           <p className={style.home}>Home</p>
//           <p className={style.favouriteTours}>Favourite tours</p>
//           <p className={style.contactUs}>Contact us</p>
//         </nav>
//         <button name='currentTheme' className={style['theme-btn']} onClick={this.onClick}>
//           Current theme: {currentTheme}
//         </button>
//       </header>
//     );
//   }
// }

export default Header;
