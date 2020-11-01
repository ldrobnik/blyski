import React from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import {WEBSITE_TEXT} from "../../../data/constants";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.div`
  margin: 5px;
  padding: 10px;
  display: inline-block;
  
  div, a {
  max-height: 30px;
  }
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
    padding: 0;
    margin: 2px;
  }
  
`;

const MainNavbar = props => {

    return (
        <NavbarWrapper>
            <Navbar>
                {WEBSITE_TEXT.mainNavbar.map((navlink) => {
                    return (
                        <HoverableButton
                            key={navlink.path}
                            path={navlink.path}
                            message={navlink.message}
                        />
                    )
                })}
            </Navbar>
        </NavbarWrapper>
    );
};

export default MainNavbar;