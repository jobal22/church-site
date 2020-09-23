import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 40%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  :focus {
    outline: none !important;
  }    
  
  span {
    width: 2rem;
    height: 0.25rem;
    background: rgba(14, 44, 59);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ expanded }) => expanded ? 'scaleX(.8) translateX(4px)' : ''};
      background: ${({ expanded }) => expanded ? 'black' : ''};
    }
    // :nth-child(2) {
    //   opacity: ${({ open }) => open ? '0' : '1'};
    //   transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    // }
    :nth-child(2) {
      transform: ${({ expanded }) => expanded ? 'translateX(15px) translateY(8px) rotate(-90deg)' : ''};
      background: ${({ expanded }) => expanded ? 'black' : ''};

    }
  }

  @media screen and (min-width: 768px) {
    top: 45%;
  }

  @media screen and (min-width: 1430px) {
    display: none;
  }

`;