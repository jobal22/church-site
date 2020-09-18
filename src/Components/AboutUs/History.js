import React, { Component } from 'react';
import secretary from '../../Images/secretary.jpg';
import assistant from '../../Images/admin.jpg';
import './History.css';

export default class History extends Component {
  render() {
    return (
      <div className='History'>
        <div className='Himg'>
          <div className='Himg__background' />
          <div className='Himg__content'>
            <h1>History and Denomination</h1>
          </div>
        </div>
        <div className='History__content'>
          <div className='HCc'>
            <div className='HCcTitle'>
              <h2>Celebrating over 100 years of Service</h2>
            </div>
            <div className='HCcContent'>
              <p>At its beginning in 1912 there were no churches in the small Castleberry community. So, God's Spirit moved upon the hearts of a small group of Christian people to hold a special revival meeting in the community's lone schoolhouse. God provided Rev. William Park, a Baptist minister, to preach the revival service.</p>
              <p>Eight of the people attending the revival meeting were convinced of the need for a permanent church in their community. Under the leadership of the Holy Spirit, they met together in the home of Mr. and Mrs. McTier on August 11, 1912 to organize the Trinity Missionary Baptist Church. The eight charter members were: Mrs. Jennie Custer, Miss Vella Mae Custer, Phillip Grienier, Ray Harding, Mr. and Mrs. McTier, Mrs. Tinabell Evans, and Mrs. Dewey Couch. To serve as the first pastor of the new church, God called Rev. Park.</p>
              <p>Services were held in the school until a suitable church building could be erected at what is now the southeast corner of the intersection of Churchill and Barbara Road. The Word of God was first proclaimed from the new building on June 23, 1913. Even though the construction work had not yet been completed, the Lord blessed the service and the many services that follow.</p>
              <p>That church building burned to the ground, November 24, 1940. On April 13, 1941 the church held its first service in the new building, with 282 attending.</p>
              <p>The church building has undergone many changes over the years, but the true heart of the church is still the love and dedication of its members.</p>
            </div>
          </div>
          <div className='HCc'>
            <div className='HCcTitle'>
              <h2>Our Affiliation</h2>
            </div>
            <div className='HCcContent'>
              <p>As an autonomous congregation, we of Trinity Baptist Church of Fort Worth, Texas choose to retain our historical alliance with the Southern Baptist Convention (SBC), the Baptist General Convention of Texas (BGCT), the Southern Baptists of Texas Convention (SBTC), and the Tarrant Baptist Association (TBA) in matters of missions and ministry. We accept the Baptist Faith &amp; Message (2000) as our general guide for faith and practice.</p>
              <p>We further choose to fellowship with those Christian organizations which share our basic belief in the Scriptures and our goals for ministry.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
