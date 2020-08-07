import React, {useState, useEffect} from 'react';
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
  
  .active {
    background-color: ${props => props.theme.themeColor};
  }
`;

const TextNavbar = (props) => {

    return (
        <StyledWrapper>

        </StyledWrapper>
    );
};

export default TextNavbar;