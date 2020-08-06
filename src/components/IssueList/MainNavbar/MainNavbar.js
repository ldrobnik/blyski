import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.div`
border: 10px solid ${props => props.theme.themeColor};
  margin: 5px;
  padding: 10px;
  display: inline-block;
`;

const MainNavbar = (props) => {

    return (
        <NavbarWrapper>
            <Navbar>
                navbar
            </Navbar>
        </NavbarWrapper>
    );
};

export default MainNavbar;