import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import Logo from '../../UI/Logo/Logo';
import Separator from '../../UI/Separator/Separator';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const AboutBox = styled.div`
  z-index: 50;
  margin: 30px;
  padding: 40px;
  width: 50%;
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
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      width: 95%;
      padding: 15px;
    }
 
 @media all and (max-width: ${props => props.theme.largeScr}) {
  width: 80%;
  padding:30px;
 } 
 
 @media all and (max-width: ${props => props.theme.extraLargeScr}) {
  width: 60%;
  padding:30px;
 } 
  
`;

const Title = styled.div`

width: 100%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;

@media all and (max-width: ${props => props.theme.smallScr}) {
      padding: 5px;
      display: block;
    }
`;

const JournalName = styled.div`
  font-size: 6em;
  font-weight: bold;
  padding-left: 10px;
  transform: translateY(-8px);
  
  @media all and (max-width: ${props => props.theme.largeScr}) {
  font-size: 4em;
  padding-left: 8px;
  }
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 3em;
  padding-left: 6px;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 2em;
      padding-left: 4px;
    }
    
  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
      font-size: 1.5em;
      padding-left: 4px;
    }
    
  @media all and (max-width: ${props => props.theme.tinyScr}) {
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
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 0.8em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.6em;
    }
    
  @media all and (max-width: ${props => props.theme.tinyScr}) {
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
            <Separator inverted={true}/>
            <p>{WEBSITE_TEXT.about.contact}</p>
            <p>{WEBSITE_TEXT.about.desclaimer}</p>
            <Separator inverted={true}/>
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