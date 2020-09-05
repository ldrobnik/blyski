import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Logo from '../../UI/Logo/Logo';
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
      color: ${props => props.theme.themeColor};
    }
    
    &:active {
      color: ${props => props.theme.themeColor}};
    }
  }
`;

const Title = styled.div`

width: 100%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;

@media all and (max-width: 552px) {
      padding: 5px;
    }
`;

const IssueName = styled.div`
  font-size: 6em;
  font-weight: bold;
  padding-left: 10px;
  transform: translateY(-8px);
  
  @media all and (max-width: 1000px) {
  font-size: 4em;
  padding-left: 8px;
  }
  
  @media all and (max-width: 700px) {
  font-size: 3em;
  padding-left: 6px;
  }
  
  @media all and (max-width: 552px) {
      font-size: 2em;
      padding-left: 4px;
    }
    
  @media all and (max-width: 380px) {
      font-size: 1.5em;
      padding-left: 4px;
    }
    
  @media all and (max-width: 350px) {
      font-size: 1em;
      padding-left: 4px;
    }
`;

const AboutPanel = props => {

    return (
        <AboutBox>
            <Title>
                <Logo
                    logoFrame={0}
                    inverted={true}/>
                    <IssueName>
                        {WEBSITE_TEXT.about.title}
                    </IssueName>
            </Title>

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