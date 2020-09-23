import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Context from './context';
import config from './.config';
// import logo from './Img/SCLogoBig.png';
import calvary from './Images/calvary-logo2.png';
import logo from './Images/trinity-word-logo.png';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import JoinUs from './Components/JoinUs/JoinUs';
import HomePage from './Components/HomePage/HomePage';
import Event from './Components/Event/Event';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 300) {
        if (this.state.status !== "App__nav") {
          this.setState({ status: "App__nav" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }


  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route exact path = "/aboutus" component={AboutUs}/>
        <Route exact path = "/joinus" component={JoinUs}/>
        <Route exact path = "/events" component={Event}/>
      </Switch>
    )
  }

  render() {
    return (
      <div className='App-container'>
        <div className='content-wrap'>
          <nav className='App__nav' 
          style={{
          backgroundColor: this.state.status === "top" ? "rgba(250, 250, 250, 0.3)" : "rgba(250, 250, 250)",}}>
            <div className='navGos'><p>Jesus died on the cross for our sins and on the third day He rose from the grave!!!</p></div>
            <Link className='navLink' to={'/'}>
              <img className='logo img' src={logo} alt='Logo' />
            </Link>
            <div className="topnav">
              <div className="hamburger">
                <HamburgerMenu />
              </div>
            </div>
          </nav>
          <main className='Main'>
            <Context.Provider>
              <main className='App__main'>{this.renderMainRoutes()}</main>
            </Context.Provider>
          </main>
        </div>
        <div className='footer'>
        <footer className="App__footer">
          <ol className='footIcon'>
            <li><a className='fIcon far fa-envelope' href={''} target='_blank' rel="noopener noreferrer"></a></li>
            <li><a className='fIcon fab fa-linkedin-in' href={''}></a></li>
            <li><a className='fIcon fab fa-instagram' href='' target='_blank' rel="noopener noreferrer"></a></li>
          </ol>
          {/* <p>COPYRIGHT © 2020 SPARROWS COFFEE CO. | ALL RIGHTS RESERVED</p> */}
        </footer>
        </div>
      </div>
    )
  }
}
