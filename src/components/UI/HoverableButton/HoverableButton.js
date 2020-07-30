import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`

border: 2px solid ${props => props.theme.themeColor};
cursor: pointer;
position: relative;
overflow: hidden;
margin: 10px 0;
display: inline-block;

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
}

  a, Link {
    width: 100%;
    height: 100%;
    padding: 10px;
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