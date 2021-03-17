import React from 'react';
import Logo from '../../atoms/Logo';
import MenuToggle from '../../atoms/MenuToggle';
import NavbarContainer from '../../atoms/NavbarContainer';
import MenuLinks from '../../moleculs/MenuLinks';
import logo from '../../../assets/images/logo.svg';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo w="50px" path={logo} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
