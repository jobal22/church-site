import React, { Component } from 'react';
import Purpose from './Purpose';
import Elders from './Elders';

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
          
        </section>
        <section className='AUBeliefs'>
          
        </section>
        <section className='AUHistory'>
          
        </section>
  
      </div>
    )
  }
}