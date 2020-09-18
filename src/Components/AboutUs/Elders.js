import React, { Component } from 'react';
import pastor from '../../Images/pastor.jpg';
import musician from '../../Images/musician.jpg';
import youth from '../../Images/youngpastor.jpg';
import './Elders.css';

export default class Elders extends Component {
  render() {
    return (
      <div className='Elders'>
        <div className='Eimg'>
          <div className='Eimg__background' />
          <div className='Eimg__content'>
            <h1>Elders</h1>
          </div>
        </div>
        <div className='Elders__content'>
          <div className='ECc'>
            <div className='ECcProfile'>
              <img className='ECcPImg ECPastor' src={pastor} alt='pastor'/>
              <p className='ECcPTitle'>Clint Hopson, Senior Pastor</p>
            </div>
            <div className='ECcProfile'>
              <img className='ECcPImg ECYouth' src={youth} alt='youth'/>
              <p className='ECcPTitle'>Brock Humbucker, Young Adults Pastor</p>
            </div>
            <div className='ECcProfile'>
              <img className='ECcPImg ECMusc' src={musician} alt='musician'/>
              <p className='ECcPTitle'>Grizzley McDuff, Worship Pastor</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
