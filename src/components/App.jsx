// import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Header from './header/Header';
import Tours from './tours/Tours';
import Footer from './footer/Footer';
import CanvasDots from './canvas-dots/CanvasDots';
import LogIn from './log-in/LogIn';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  const onChangeTheme = e => {
    setCurrentTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  };
  const toggleOpenModal = () => {
    setVisible(prevState => (prevState === false ? true : false));
  };

  return (
    <div>
      <Header
        onChangeTheme={onChangeTheme}
        currentTheme={currentTheme}
        toggleOpenModal={toggleOpenModal}
      ></Header>
      {visible === true && (
        <LogIn toggleOpenModal={toggleOpenModal} visible={visible}></LogIn>
      )}
      <Tours currentTheme={currentTheme}>
        <CanvasDots position="up" />
        <CanvasDots position="down" />
      </Tours>
      <Footer currentTheme={currentTheme}></Footer>
    </div>
  );
};

export default App;
