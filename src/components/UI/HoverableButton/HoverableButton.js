import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in;
z-index: 50;

&:hover {
color: ${props => props.theme.lightColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
}

  &:hover:before {
  transform: translateY(-2px);
  }

  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1em;
  padding: 10px 10px;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
      padding: 10px 6px;
    }
    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.8em;
      padding: 6px 2px;
    }

`;

const InvertedButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.lightColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in;
z-index: 50;

&:hover {
color: ${props => props.theme.themeColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.lightColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
}

  &:hover:before {
  transform: translateY(-2px);
  }

  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1em;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 0.8em;
    }

`;

const HoverableButton = props => {

    //constant holding the button content
    const buttonMessage = props.message;

    //the content of the button; for inverted button switch colors
    const buttonContent = props.inverted ? (
        <InvertedButtonWrapper>
            {buttonMessage}
        </InvertedButtonWrapper>
    ) : (
            <ButtonWrapper>
                {buttonMessage}
            </ButtonWrapper>
        )
    ;

    return (
        <React.Fragment>
            {(props.path[0] === '/') ?
                <Link
                    to={props.path}
                >
                    {buttonContent}
                </Link> :
                <a
                    href={props.path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonContent}
                </a>
            }
        </React.Fragment>
    );
};

export default HoverableButton;