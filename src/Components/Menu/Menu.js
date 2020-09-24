import React from 'react';
import { Route } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const Menu = ({ expanded, setExpanded }) => {
  // const closeMenu = false;
  // const tabIndex = closeMenu;



  return (
    <StyledMenu expanded={expanded}>
      <div className='dropdown'>
        <button className='dropbtn'>About Us</button>
        <div className='dropdown-content' onClick={() => setExpanded(expanded ? false : "expanded")}>
          <a href="/aboutus" >About Us</a>
          <a href="/aboutus/#Elders">Elders</a>
          <a href="/aboutus/#Staff">Staff</a>
          <a href="/aboutus/#History" >History and Denomination</a>
        </div>
      </div>
      <div className='dropdown'>
        <button className='dropbtn'>Join Us</button>
        <div className='dropdown-content'onClick={() => setExpanded(expanded ? false : "expanded")}>
          <a href="/joinus" >Join Us</a>
          <a href="/joinus/#Membership" >Membership</a>
          <a href="/joinus/#Groups" >Groups</a>
          <a href="/joinus/#Children" >Children</a>
          <a href="/joinus/#Internship">Internship</a>
          <a href="/joinus/#Missions" >Missions</a>
        </div>
      </div>

      {/* <a href="/aboutus" tabIndex={tabIndex}>About Us</a> */}
      {/* <a href="/joinus" tabIndex={tabIndex}>Join Us</a> */}
      <a href="/events" >Events</a>
      <a href="/" >Media</a>
      <a href="/give" >Give</a>
      <a href="/" >Contact Us</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  expanded: bool.isRequired,
};

export default Menu;
