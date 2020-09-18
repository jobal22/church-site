import React, { Component } from 'react';
import Purpose from './Purpose';
import Elders from './Elders';
import Staff from './Staff';
import History from './History';
import './AboutUs.css';


export default class AboutUs extends Component {
  render() {
    return (
      <div className='AboutUs'>
        <section>
          <Purpose />
        </section>
        <section id='Elders'>
          <Elders />
        </section>
        <section id='Staff'>
          <Staff />
        </section>
        <section id='History'>
          <History />
        </section>
      </div>
    )
  }
}
