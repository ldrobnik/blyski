import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`

`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 700;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.themeColor};
`;

const About = (props) => {


    return (
        <React.Fragment>
            <AboutWrapper>
                Info
            </AboutWrapper>
            <Backdrop/>
        </React.Fragment>
    );
};

export default About;