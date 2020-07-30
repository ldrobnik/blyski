import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`

border: 2px solid ${props => props.theme.themeColor};
cursor: pointer;
position: relative;
overflow: hidden;

&:before {
  content: '';
  background-color: ${props => props.theme.themeColor};
}

  a {
    width: 100%;
    height: 100%;
  }
`;

const HoverableButton = (props) => {

    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    );
};

export default HoverableButton;