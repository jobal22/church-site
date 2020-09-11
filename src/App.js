import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Context from './context';
// import config from './.config';
import logo from './Img/SCLogoBig.png';
import calvary from './Images/calvary-logo2.png';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import HomePage from './Components/HomePage/HomePage';
import Book from './Components/Book/Book';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import './App.css';

export default class App extends Component {

  state = {
    emails: [],
    events: [],
    addEmails: {
      hasError: false,
      touched: false,
      name: '',
    },
    addEvents: {
      hasError: false,
      touched: false,
      name: '',
    }
  }

  setEmails = emails => {
    this.setState({
      emails
    })
  }

  setEvents = events => {
    this.setState({
      events
    })
  }

  handleAddEmails = emails => {
    this.setState({
      emails: [...this.state.emails, emails],
    })
  }

  handleAddEvents = events => {
    this.setState({
      events: [...this.state.events, events],
    })
  }


  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route  path = "/book" component={Book}/>
        <Route  path = "/team" component={Team}/>
        <Route  path = "/contact" component={Contact}/>
      </Switch>
    )
  }

  render() {
    const contextValue = {
      emails: this.state.emails,
      handleAddEmails: this.handleAddEmails,
      events: this.state.events,
      handleAddEvents: this.handleAddEvents,

    }
    return (
      <div className='App-container'>
        <div className='content-wrap'>
          <nav className='App__nav'>
            <Link className='navLink' to={'/'}>
              <img className='logo img' src={calvary} alt='Logo'/>
            </Link>
            <div className="topnav">
              <div className="hamburger">
                <HamburgerMenu/>
              </div>
            </div>
          </nav>
          <div>
            <Context.Provider value={contextValue}>
              <main className='App__main'>{this.renderMainRoutes()}</main>
            </Context.Provider>
          </div>
        </div>
      </div>
    )
  }
}
