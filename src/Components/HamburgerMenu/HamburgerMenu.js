import React, { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import Menu from '../Menu/Menu.js';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="NavBar"ref={node}>
        <FocusLock disabled={!open}>
          <HamburgerIcon className='menu' open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>        
    </>
  );
}

export default HamburgerMenu;
