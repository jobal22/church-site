import React, { Component } from 'react';
import './Membership.css';

export default class Membership extends Component {
  render() {
    return (
      <div className='Membership'>
        <div className='Membership__content'>
          <div className='MCTitle'>
            <h2>Become a part of our family</h2>
          </div>
          <div className='MCContent'>
            <h3>Before you join</h3>
            <p>In order to join Trinity Baptist Church, there must have been a time in your life when you turned away from your sins, believed that Jesus died on the cross and rose from the grave, and confessed Jesus to be your Lord.</p>
            <h3>How to join</h3>
            <p>Please come down at the end of the sermon on Sunday morning to speak to the pastor or contact the church office during the week to schedule a time to speak to the pastor. If you have never been biblically baptized after your salvation,  we would love to baptize you as a part of the membership process.</p>
            <h3>Membership expectations</h3>
            <p>Only Jesus is perfect, but this is no excuse to walk in sin. We must walk with Jesus the same way that we received him through repentance and belief. As a member of Trinity Baptist Church, we will hold each other accountable to loving God and loving others. This will involve growing in your walk with Christ, sharing the Gospel with the lost, and training others how to obey Christ as you learn how to obey Christ.</p>
          </div>
        </div>
      </div>
    )
  }
}
