import React, { Component } from 'react';
import './Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div className='Missions'>
        <div className='Miimg'>
          <div className='Miimg__background' />
          <div className='Miimg__content'>
            <h1>Missions</h1>
          </div>
        </div>
        <div className='MiContent'>
          <h2>Go and Make Disciples</h2>
          <p>Sharing the Gospel with lost is a very important part of a believers walk with Christ. Our desire is to encourage one another in the skill of evangelism. Every Sunday at 3pm, we go out into the community to share the gospel and invite people to repent and believe in Jesus as Lord and Savior. We invite you to come with us to learn, train, and help evangelize.</p>
        </div>
      </div>
    )
  }
}
