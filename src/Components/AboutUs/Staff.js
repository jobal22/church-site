import React, { Component } from 'react';
import secretary from '../../Images/secretary.jpg';
import assistant from '../../Images/admin.jpg';
import './Staff.css';

export default class Purpose extends Component {
  render() {
    return (
      <div className='Staff'>
        <div className='Simg'>
          <div className='Simg__background' />
          <div className='Simg__content'>
            <h1>Staff</h1>
          </div>
        </div>
        <div className='Staff'>
          <div className='SCc'>
            <div className='SCcProfile'>
              <img className='SCcPImg SCSec' src={secretary} alt='secretary'/>
              <p className='SCcPTitle'>Melanie Patrone, Administrative Director</p>
            </div>
            <div className='SCcProfile'>
              <img className='SCcPImg' src={assistant} alt='assistant'/>
              <p className='SCcPTitle'>Penelopie Eipolenep, Administrative Assistant</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
