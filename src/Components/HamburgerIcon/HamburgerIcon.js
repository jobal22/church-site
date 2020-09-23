import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './HamburgerIcon.styled';

const HamburgerburgerMenu = ({ expanded, setExpanded }) => {
  // const isExpanded = open ? true : false;
  return (
    <StyledBurger aria-label="Toggle menu"  expanded={expanded} onClick={() => setExpanded(expanded ? false : "expanded")}>
      <span />
      {/* <span /> */}
      <span />
    </StyledBurger>
  );
};

HamburgerburgerMenu.propTypes = {
  expanded: bool.isRequired,
  setExpanded: func.isRequired,
};

export default HamburgerburgerMenu;
