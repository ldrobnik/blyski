import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const AboutBox = styled.div`
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 10px solid ${props => props.theme.lightColor};
  color: ${props => props.theme.lightColor};
  text-align: center;
  
    a {
    color: ${props => props.theme.lightColor};
    transition: all 0.2s ease-in;
    
    &:link {
      color: ${props => props.theme.lightColor};
    }
    
    &:visited {
      color: ${props => props.theme.lightColor};
    }
    
    &:hover {
      color: ${props => props.theme.lightThemeColor};
    }
    
    &:active {
      color: ${props => props.theme.themeColor};
    }
  }
  

`;

const AboutPanel = (props) => {

    return (
        <AboutBox>
            <h1>{WEBSITE_TEXT.about.title}</h1>
            <h3>{WEBSITE_TEXT.about.subtitle}</h3>
            {WEBSITE_TEXT.about.content}
            <p>{WEBSITE_TEXT.about.contact}</p>
            <p>{WEBSITE_TEXT.about.desclaimer}</p>
            <p>{WEBSITE_TEXT.about.credits}</p>
            <p>{WEBSITE_TEXT.about.footnote}</p>
            <HoverableButton
                path="/"
                message={WEBSITE_TEXT.about.button}
                inverted={true}
            />
        </AboutBox>
    );
};

export default AboutPanel;