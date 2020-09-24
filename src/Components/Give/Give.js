import React, { Component } from 'react';
import './Give.css';

export default class Give extends Component {
  render() {
    return (
      <div className='Give'>
        <div className='Giimg'>
          <div className='Giimg__background' />
          <div className='Giimg__content'>
            <h1>Give</h1>
          </div>
        </div>
        <div className='Give__content'>
          <div className='GiTitle'>
            <h2>We generously give to God and to others <br></br> because Christ generously gave himself to us.</h2>
          </div>
          <div className='GiContent'>
            <p>Dear Members, thank you for your continued support! We are pleased to offer this safe on-line ability to make donations to Trinity Baptist Church. You can make a one-time gift (no account necessary) or set up a recurring donation using the link below. Your tithes and offerings are vital to the ongoing ministry of our church.</p>
          </div>
        </div>
        <div className='GiveBC'>
        <button><a className='Give__button' href='https://app.clovergive.com/App/Giving/trin620121' target='blank_'>Make a Donation</a></button>
        </div>
      </div>
    )
  }
}
