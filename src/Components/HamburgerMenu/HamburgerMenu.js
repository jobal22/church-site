import React, { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import Menu from '../Menu/Menu.js';
import './HamburgerMenu.css';

function HamburgerMenu() {
  // const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  // useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="NavBar"ref={node}>
        <FocusLock disabled={!expanded}>
          <HamburgerIcon className='menu' expanded={expanded} setExpanded={setExpanded} aria-controls={menuId} />
          <Menu expanded={expanded} setExpanded={setExpanded} id={menuId} />
        </FocusLock>
      </div>        
    </>
  );
}

export default HamburgerMenu;
