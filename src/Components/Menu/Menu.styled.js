import styled from 'styled-components';

export const StyledMenu = styled.nav`
@media screen and (max-width: 1439px) {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background: #FAFAFA;
  transform: ${({ open }) => open ? 'translateY(-100)' : 'translateY(-100%)'};
  height: 100vh;
  text-align: left;
  padding-top: 30px;
  position: absolute;
  top: 0;
  right: 0;
  // border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  a {
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    padding: 15px;
    padding-left: 40px;
    font-weight: 600;
    letter-spacing: 0.15rem;
    color: #707070;
    text-decoration: none;
    transition: color 0.3s linear;
    :focus {
      outline: none !important;
    }
    // &:hover {
    //   color: #bfb391;
    // }
  }
}
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    padding-right: 5%;
    padding-top: 35px;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    // width: 20vh;

    a {
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
      // text-transform: uppercase;
      // padding: 15px;
      padding-left: 40px;
      font-weight: 600;
      letter-spacing: 0.2rem;
      color: black;
      text-decoration: none;
        transition: color 0.3s linear;
      :focus {
        outline: none !important;
      }
      // &:hover {
      //   border: 1px solid black;
      //   border-radius: 10px;
      // }
    }
  }
`;