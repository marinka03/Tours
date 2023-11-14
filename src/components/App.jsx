// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { ModalProvider } from 'styled-react-modal'
// import Rodal from 'rodal';

import Header from './header/Header';
import Tours from './tours/Tours';
import Footer from './footer/Footer';
import CanvasDots from './canvas-dots/CanvasDots';

class App extends Component {
  state = {
    visible: false,
    currentTheme: 'light',
  };

  onChangeTheme = e => {
    console.dir(e.target.name);
    this.setState({
      [e.target.name]: this.state.currentTheme === 'dark' ? 'light' : 'dark',
    });
  };
  onClickLogInBtn = e => {
    this.setState({ visible: this.state.visible ? false : true });
  };

  render() {
    const { currentTheme } = this.state;
    return (
      <div>
        <Header
          onChangeTheme={this.onChangeTheme}
          currentTheme={currentTheme}
          onClickLogIn={this.onClickLogInBtn}
        />

        <Tours currentTheme={currentTheme}>
          <CanvasDots position="up" />
          <CanvasDots position="down" />
        </Tours>
        <Footer currentTheme={currentTheme}></Footer>

      </div>
    );
  }
}
// {/* <LogIn
// onClickLogInBtn={this.onClickLogInBtn}
// visible={this.state.visible}
// ></LogIn> */}

export default App;
