import React, { Component } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Event.css';

export default class Event extends Component {
  render() {
    return (
      <div className='Event'>
        <ScrollToTop />      
        <div className='Evimg'>
          <div className='Evimg__background' />
          <div className='Evimg__content'>
            <h1>Weekly Events</h1>
          </div>
        </div>
        <div className='Event__content'>
          <div className='EC1'>
            <div className='EventBlock'>
              <h3>Sunday Bible Study</h3>
              <p>Sundays 9:30am - 10:30am</p>
            </div>
            <div className='EventBlock'>
              <h3>Sunday Worship Service</h3>
              <p>Sundays 10:45am - 12pm</p>
            </div>
            <div className='EventBlock'>
              <h3>Young Adults' Bible Study</h3>
              <p>Sunday 6pm - 8pm</p>
            </div>
          </div>
          <div className='EC2'>
            <div className='EventBlock'>
              <h3>Men's Coffee</h3>
              <p>Wednesday 9am - 10am</p>
            </div>
            <div className='EventBlock'>
              <h3>Prayer and Devotional</h3>
              <p>Wednesday 6:30pm - 7:30pm</p>
            </div>
            {/* <div className='EventBlock'>
              <h3>Choir Practice</h3>
              <p>Wednesday 7:30pm - 8:30pm</p>
            </div> */}
            <div className='EventBlock'>
              <h3>Youth Bible Study</h3>
              <p>Wednesday 7:30pm - 8:30pm</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
