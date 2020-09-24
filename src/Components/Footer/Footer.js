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
          <div className='faP'>
            <p>620 Churchill Rd<br></br>Fort Worth, TX 76114</p>
            <p>817-732-5566</p>
          </div>
        </section>
        <section className='footIcon1'>
          <ol className='footIcon'>
            <li><a className='fIcon far fa-envelope' href={''} target='_blank' rel="noopener noreferrer"></a></li>
            <li><a className='fIcon fab fa-facebook-f' href={''}></a></li>
            <li><a className='fIcon fab fa-instagram' href='' target='_blank' rel="noopener noreferrer"></a></li>
          </ol>
        </section>
      </footer>
      </div>
  )
  }
}
