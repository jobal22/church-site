import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className='dropdown'>
        <button className='dropbtn'>About Us</button>
        <div className='dropdown-content'>
          <a href="/aboutus" tabIndex={tabIndex}>About Us</a>
          <a href="/aboutus/#Elders">Elders</a>
          <a href="/aboutus/#Staff">Staff</a>
          <a href="/aboutus/#History">History and Denomination</a>
        </div>
      </div>
      <div className='dropdown'>
        <button className='dropbtn'>Join Us</button>
        <div className='dropdown-content'>
          <a href="/joinus" tabIndex={tabIndex}>Join Us</a>
          <a href="/joinus/#Membership">Membership</a>
          <a href="/joinus/#Groups">Groups</a>
          <a href="/joinus/#Children">Children</a>
          <a href="/joinus/#Internship">Internship</a>
          <a href="/joinus/#Missions">Missions</a>
        </div>
      </div>

      {/* <a href="/aboutus" tabIndex={tabIndex}>About Us</a> */}
      {/* <a href="/joinus" tabIndex={tabIndex}>Join Us</a> */}
      <a href="/" tabIndex={tabIndex}>Families</a>
      <a href="/" tabIndex={tabIndex}>Events</a>
      <a href="/" tabIndex={tabIndex}>Media</a>
      <a href="/" tabIndex={tabIndex}>Internships</a>
      <a href="/" tabIndex={tabIndex}>Give</a>
      <a href="/" tabIndex={tabIndex}>Contact Us</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
