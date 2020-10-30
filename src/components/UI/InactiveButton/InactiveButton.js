import React, {useState, useEffect} from 'react';
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
transition: all 0.2s ease-in;
z-index: 50;

color: ${props => props.theme.lightColor};

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(-2px);
  transition: all 0.2s ease-in;
}

 
  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.1em;
  padding: 10px 10px;
  }

  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1em;
      padding: 10px 6px;
    }
    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.9em;
      padding: 6px 2px;
    }
`;

const InvertedButtonWrapper = styled.div`
font-weight: bold;
font-size: 1.2em;
color: ${props => props.theme.themeColor};
display: inline-block;
position: relative;
margin: 1px 0;
padding: 10px 20px;
overflow: hidden;
transition: all 0.2s ease-in;
z-index: 50;

&:before {
  content: '';
  background-color: ${props => props.theme.lightColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(-2px);
  transition: all 0.2s ease-in;
}


  @media all and (max-width: ${props => props.theme.mediumScr}) {
  font-size: 1.1em;
  padding: 10px 10px;
  }

  @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 1em;
      padding: 10px 6px;
    }
    @media all and (max-width: ${props => props.theme.tinyScr}) {
      font-size: 0.9em;
      padding: 6px 2px;
    }

`;

const InactiveButton = (props) => {

    //constant holding the button content
    const buttonMessage = props.message;

    return (
        <React.Fragment>
            {(props.inverted) ? (
                <InvertedButtonWrapper>
                    {buttonMessage}
                </InvertedButtonWrapper>
            ) : (
                <ButtonWrapper>
                    {buttonMessage}
                </ButtonWrapper>
            )}
        </React.Fragment>
    );
};

export default InactiveButton;