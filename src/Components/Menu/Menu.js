import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/aboutus" tabIndex={tabIndex}>About Us</a>
      <a href="/" tabIndex={tabIndex}>Join Us</a>
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
