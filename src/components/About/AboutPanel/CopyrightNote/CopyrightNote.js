import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {WEBSITE_TEXT} from "../../../../data/constants";

/** STYLED COMPONENTS **/
const NoteWrapper = styled.div`

font-size: 10px;

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
      color: ${props => props.theme.lightColor} !important;
    }
    
    &:active {
      color: ${props => props.theme.lightColor}} !important;
    }
`;

const CopyrightNote = (props) => {

    return (
        <NoteWrapper>
            {WEBSITE_TEXT.about.copyright}
        </NoteWrapper>
    );
};

export default CopyrightNote;