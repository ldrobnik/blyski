import React, {useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import AboutPanel from './AboutModal/AboutPanel';

/* STYLED COMPONENTS */

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.themeColor};
`;

const About = (props) => {



    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);
    }, []);



    return (
        <React.Fragment>
            <AboutPanel />
            <Backdrop />
        </React.Fragment>
    );
};

export default About;