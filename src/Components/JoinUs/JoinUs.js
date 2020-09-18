import React, { Component } from 'react';
import Membership from './Membership';
import Groups from './Groups';
import Children from './Children';
import Internship from './Internship';
import Missions from './Missions';
import './JoinUs.css';


export default class JoinUs extends Component {
  render() {
    return (
      <div className='JoinUs'>
        <section>
          <div className='Jimg'>
            <div className='Jimg__background' />
            <div className='Jimg__content'>
              <h1>Join Us</h1>
            </div>
          </div>
        </section>
        <section id='Membership'>
          <Membership />
        </section>
        <section id='Groups'>
          <Groups />
        </section>
        <section id='Children'>
          <Children />
        </section>
        <section id='Internship'>
          <Internship />
        </section>
        <section id='Missions'>
          <Missions />
        </section>
      </div>
    )
  }
}
