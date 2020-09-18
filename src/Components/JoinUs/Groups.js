import React, { Component } from 'react';
import './Groups.css';

export default class Groups extends Component {
  render() {
    return (
      <div className='Groups'>
        <div className='Grimg'>
          <div className='Grimg__background' />
          <div className='Grimg__content'>
            <h1>Groups</h1>
          </div>
        </div>
        <div className='Groups__content'>
          <div className='GrCc'>
            <div className='GrCcTitle'>
              <h2>Bible Study</h2>
            </div>
            <div className='GrCcContent'>
              <p>Our Bible Study meets on Sunday morning at 9:00am before the Worship Service. The Bible Study is currently led by the pastor. We look forward to seeing you.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
