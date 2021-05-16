import React from 'react';
import logo from '../../../assets/images/logo.svg';

import { Logo, NavbarContainer, MenuToggle } from '../../atoms';
import { MenuLinks } from '../../moleculs';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props} isOpen={isOpen}>
      <Logo w="50px" path={logo} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
