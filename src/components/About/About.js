import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`

`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.themeColor};
`;

const About = (props) => {

    return (
        <React.Fragment>
            <AboutWrapper>

            </AboutWrapper>
            <Backdrop/>
        </React.Fragment>
    );
};

export default About;