import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
font-weight: bold;
font-size: 1em;
text-align: center;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
padding: 6px 10px;
margin: 3px 0;
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
  
  @media all and (max-width: 630px) {
      font-size: 0.8em;
    }

`;


const AuthorLink = props => {

    return (
        <StyledLink
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.title}
        </StyledLink>
    );
};

export default AuthorLink;