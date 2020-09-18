import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Internship.css';

export default class Internship extends Component {
  render() {
    return (
      <div className='Internship'>
        <div className='Iimg'>
          <div className='Iimg__background' />
          <div className='Iimg__content'>
            <h1>Internship</h1>
          </div>
        </div>
        <div className='IContent'>
          <h2>Learn and Teach</h2>
          <p>Trinity Baptist Church offers paid internships to individuals in college or seminary who are interested in ministry work as a lifelong calling. Positions are flexible. Let us know if there is a specific type of ministry you are interested in.</p>
          <button><Link className='IContent__button' to={``}>Learn More</Link></button>
        </div>
      </div>
    )
  }
}
