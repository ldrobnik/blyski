import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`


font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 30px;
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

  @media all and (max-width: 700px) {
  font-size: 1em;
  }
  
  @media all and (max-width: 552px) {
      font-size: 0.8em;
    }

`;

const HoverableButton = (props) => {

    //constant holding the button content
    const buttonMessage = props.message;

    //the content of the button
    const buttonContent = (
        <ButtonWrapper>
            {buttonMessage}
        </ButtonWrapper>
    );

    return (
        <React.Fragment>
            {(props.path[0] === '/') ?
                <Link
                    to={props.path}>
                    {buttonContent}
                </Link> :
                <a
                    href={props.path}
                    target="_blank"
                    rel="noopener noreferrer">
                    {buttonContent}
                </a>
            }
        </React.Fragment>
    );
};

export default HoverableButton;