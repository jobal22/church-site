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
        <section className='AUPurpose'>
          <Purpose />
        </section>
        <section className='AUElders'>
          <Elders />
        </section>
        <section className='AUStaff'>
          <Staff />
        </section>
        <section className='AUBeliefs'>
          <History />
        </section>
        <section className='AUHistory'>
          
        </section>
  
      </div>
    )
  }
}
