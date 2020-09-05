import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Logo from '../../UI/Logo/Logo';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const AboutBox = styled.div`
  z-index: 50;
  position: absolute;
  max-width: 50vw;
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
  
  @media all and (max-width: 1000px) {
  max-width: 70vw;
  }
  
  @media all and (max-width: 700px) {
  max-width: 75vw;
  }
  
  @media all and (max-width: 552px) {
      max-width: 85vw;
    }
    
  @media all and (max-width: 380px) {
      max-width: 90vw;
    }
    
  @media all and (max-width: 350px) {
      max-width: 95vw;
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

const JournalName = styled.div`
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

const JournalSubtitle = styled.div`
  text-align: center;
font-weight: bold;
  padding: 12px;
  font-size: 1em;
  transform: translateY(-20px);
  
  @media all and (max-width: 700px) {
  font-size: 0.8em;
  }
  
  @media all and (max-width: 552px) {
      font-size: 0.6em;
    }
    
  @media all and (max-width: 350px) {
      font-size: 0.5em;
    }
  
`;

const AboutPanel = props => {

    return (
        <AboutBox>
            <Title>
                <Logo
                    logoFrame={0}
                    inverted={true}/>
                <div>
                    <JournalName>
                        {WEBSITE_TEXT.about.title}
                    </JournalName>
                    <JournalSubtitle>
                        {WEBSITE_TEXT.about.subtitle}
                    </JournalSubtitle>
                </div>
            </Title>
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