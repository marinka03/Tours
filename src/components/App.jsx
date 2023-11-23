// import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import Header from './header/Header';
// import Tours from './tours/Tours';
// import Footer from './footer/Footer';
// import CanvasDots from './canvas-dots/CanvasDots';
// import LogIn from './log-in/LogIn';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyles';
import Home from 'pages/HomePage';
import About from 'pages/AboutPage';
import ToursPage from 'pages/ToursPage';
import AppLayout from './AppLayout/AppLayout';

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
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              onChangeTheme={onChangeTheme}
              currentTheme={currentTheme}
              toggleOpenModal={toggleOpenModal}
              visible={visible}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="tours"
            element={<ToursPage currentTheme={currentTheme} />}
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
      {/* <Header
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
      <Footer currentTheme={currentTheme}></Footer> */}
    </div>
  );
};

export default App;
// http://localhost:3000/Tours
