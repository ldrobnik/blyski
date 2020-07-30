import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`

border: 2px solid ${props => props.theme.themeColor};
font-weight: bold;
font-size: 1.2em;
display: inline-block;
position: relative;
margin: 5px 0;
padding: 10px 45px;
overflow: hidden;
cursor: pointer;
transition: all 0.5s;

&:hover {
color: ${props => props.theme.lightColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;
  z-index: -10;
  transform: translateY(100%);
  transition: all 0.3s;
}

  &:hover:before {
  transform: translateY(-5%);
  }


  a, Link {
    width: 100%;
    height: 100%;
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