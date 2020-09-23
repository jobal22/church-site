import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../.config';
import Form from '../Form/Form';
import logo from '../../Images/trinity-word-logo.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
      <footer className="App__footer">
        <section className='foot__Connection'>
          <h2>Stay connected</h2>
          <Form />
        </section>
        <hr className='footHr' />
        <section className='footLogo'>
          <img className='footlogo1' src={logo} alt='Logo' />
        </section>
        <section className='footAddress'>
          <p>620 Churchill Rd<br></br>Fort Worth, TX 76114</p>
          <p>817-732-5566</p>
        </section>
        <section className='footSiteLinks'>
          <div className='fsl__content'>
            <h4><a className='fslct' href="/aboutus" >About Us</a></h4>
            <div className='fslLinks1'>
              <div className='fslLinksA'>
                {/* <a href="/aboutus" >About Us</a> */}
                <a href="/aboutus/#Elders">Elders</a>
                <a href="/aboutus/#Staff">Staff</a>
                <a href="/aboutus/#History" >History</a>
              </div>
            </div>
          </div>
          <div className='fsl__content'>
            <h4><a className='fslct' href="/joinus" >Join Us</a></h4>
            <div className='fslLinks2'>
              <div className='fslLinksC'>
                {/* <a href="/joinus" >Join Us</a> */}
                <a href="/joinus/#Membership" >Membership</a>
                <a href="/joinus/#Groups" >Groups</a>
                <a href="/joinus/#Children" >Children</a>
                <a href="/joinus/#Internship">Internship</a>
              </div>
              <div className='fslLinksD'>
                <a href="/joinus/#Missions" >Missions</a>
                <a href="/events" >Events</a>
                <a href="/" >Media</a>
                <a href="/" >Give</a>
                {/* <a href="/" >Contact Us</a> */}
              </div>
            </div>
          </div>
        </section>
        <section className='footIcon1'>
          <ol className='footIcon'>
            <li><a className='fIcon far fa-envelope' href={''} target='_blank' rel="noopener noreferrer"></a></li>
            <li><a className='fIcon fab fa-linkedin-in' href={''}></a></li>
            <li><a className='fIcon fab fa-instagram' href='' target='_blank' rel="noopener noreferrer"></a></li>
          </ol>
        </section>
      </footer>
      </div>
  )
  }
}
