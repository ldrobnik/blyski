import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {WEBSITE_TEXT} from "../../../data/constants";

/* STYLED COMPONENTS */
const AboutPanel = styled.div`
  z-index: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid ${props => props.theme.lightColor};
  color: ${props => props.theme.lightColor};
  text-align: center;
`;

const AboutModal = (props) => {

    return (
        <AboutPanel>
            <h1>{WEBSITE_TEXT.about.title}</h1>
            <h3>{WEBSITE_TEXT.about.subtitle}</h3>
            {WEBSITE_TEXT.about.content}
            <p>{WEBSITE_TEXT.about.credits}</p>
            <p>{WEBSITE_TEXT.about.footnote}</p>
        </AboutPanel>
    );
};

export default AboutModal;