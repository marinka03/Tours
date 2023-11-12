// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Rodal from 'rodal';

import Header from './header/Header';
import Tours from './tours/Tours';
import Footer from './footer/Footer';
import LogIn from './log-in/LogIn';


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
  onClickLogInBtn = e =>{
    // console.log(e.target.name)
    this.setState({visible: this.state.visible? false:true})
    // console.log(this.state.visible)
  }
 

  render() {
    const { currentTheme } = this.state;
    console.log(this.state.visible)
    return (
      <div>
        <Header
          onChangeTheme={this.onChangeTheme}
          currentTheme={currentTheme}
          onClickLogIn={this.onClickLogInBtn}
        />
        <Tours currentTheme={currentTheme}></Tours>
        <Footer currentTheme={currentTheme}></Footer>
        <LogIn onClickLogInBtn={this.onClickLogInBtn} visible={this.state.visible}></LogIn>
      </div>
    );
  }
}

// App.propTypes = {

// }

export default App;
