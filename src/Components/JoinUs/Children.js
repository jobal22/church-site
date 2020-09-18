import React, { Component } from 'react';
import './Children.css';

export default class Children extends Component {
  render() {
    return (
      <div className='Children'>
        <div className='Chimg'>
          <div className='Chimg__background' />
          <div className='Chimg__content'>
            <h1>Children</h1>
          </div>
        </div>
        <div className='Children__content'>
          <div className='ChContent'>
            <h2>Let Them Come!</h2>
            <p>During Sunday morning’s Bible Study and Worship Service, our Children’s Ministry is open. We do encourage families to be together during the Worship Service, so that your children can see mature believers worship and mainly see dad and mom worship. However, we do make the Children’s Ministry available during this time. Our Children’s Ministry focuses on helping your children hear, memorize, and understand the Bible.</p>
          </div>
        </div>
      </div>
    )
  }
}
