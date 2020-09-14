import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import Context from '../../context';
import config from '../../.config';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import './Form.css';

const Required = () => (
  <span className='AddAddress__required'>(required)</span>
)

export default class Form extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  static contextType = Context;

  state = {
    email: {
      touched: false,
      value: '',
    }
  }

  handleEmail = (e) => {
    let {email} = this.state
    email.value = e.target.value
    this.setState({email})
  }

  handleEventFormSubmit = (e) => {
    e.preventDefault(e)
    const newEmail = {
      email: this.state.email.value,
    }
    // fetch(`${config.API_ENDPOINT}/api/events`, {
    //   method: 'POST',
    //   body: JSON.stringify(newEvent),
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // })
    // .then(res => {
    //   return res.json()
    // })
    // .then((data) => {
    //   this.context.handleAddEvents(data)
    //   Swal.fire({title: 'Booking Information Sent!', width: 300, confirmButtonColor: '#9CA7AD'})
    //   .then(() => {
    //   this.props.props.history.push('/')})
    //   })
    //   .catch(error => {
    //     Swal.fire({title: 'Oops!', text: 'Booking information failed', width: 300, confirmButtonColor: '#9CA7AD'})
    //     console.error(error)
    //     this.setState({ error })
    //   })
    //   //allows information to be emailed directly to the owner
    //   emailjs.sendForm('gmail', `${config.SID}`, e.target, `${config.UID}`)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  render() {
    return (
      <div className='form'>
        <form
          className='connection__form'
          onSubmit={this.handleEventFormSubmit.bind(this)}
          >
          <div className='formInfo'>
            {/* <label htmlFor='email'>
              Email:
              {' '}
              <Required /> {' '}
            </label>
            <br></br> */}
            <input
              type='text'
              name='email'
              id='email'
              aria-label="email"
              placeholder='Email Address'
              onChange={this.handleEmail}
              required
            />
          </div>
          <div className='form__button'>
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}
