import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import group from '../../Images/small-group.jpg';
import families from '../../Images/families.jpg';

import './HomePage.css';

export default function AboutUs() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  
  return (
    <div className='HomePage'>
      <section className='HPServiceTime'>
        <div className='HPServiceTime__background' />
        <div className='HPServiceTime__content'>
          <h1>Live services now</h1>
          <h2>Sundays: Bible Study at 9:00am &amp; Worship Service at 10:45am at <a className='locationLink' href='https://goo.gl/maps/DMeZ4Kjd2Tke396F8' target='_blank' rel="noopener noreferrer">Trinity Baptist Church</a></h2>
        </div>
      </section>
      <section className='HPSermon'>
        <div className='HPSermon__background'/>
        <h3>Last Weeks Sermon</h3>
        <iframe className='youtubeVid' src="https://www.youtube.com/embed/gbZ-W4vYuF4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </section>
      <section className='HPActivities'>
        <div className='HPFamilies'>
          <div className='HPImgHolder'>
            <img className='HPAImg' src={families} alt='families'/>
          </div>
          <div className='HPAContent'>
            <h2>Families</h2>
            <p>Training husbands to love their wives and lead their families, wifes to love their husbands and children, and children to obey their parents.</p>
            <button><Link className='HPAContent__button' to={``}>Learn More</Link></button>
          </div>
        </div>
        <div className='HPGroups'>
          <div className='HPImgHolder'>
          <img className='HPAImg' src={group} alt='group'/>
          </div>
          <div className='HPAContent'>
            <h2>Groups</h2>
            <p>Helping each other have a better understanding of God's Word and to actively obey it.</p>
            <button><Link className='HPAContent__button' to={``}>Learn More</Link></button>
          </div>
        </div>
      </section>
      <section className='HPConnection'>
        <h2>Stay connected</h2>
        <Form />
      </section>
    </div>
  )
}
