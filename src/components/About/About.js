import React, {useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import AboutModal from './AboutModal/AboutModal';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.themeColor};
  }
`;

const About = (props) => {

    let history = useHistory();

    //redirect to home page
    const goHome = () => {
        history.push('/');
    };

    //if certain keys are pressed, go to home page
    const handleKeyPress = useCallback((event) => {

        //checks whether esc, space or enter have been pressed
        if ((event.keyCode === 27) || (event.keyCode === 32) || (event.keyCode === 13)) {
            goHome(); //redirects to homepage
        }
    }, []);

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);
    }, []);

    //adds/removes event listener for keydown
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);

        return () => {
            document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, []);

    return (
        <React.Fragment>
            <AboutModal/>
            <Backdrop onClick={() => goHome()}/>
        </React.Fragment>
    );
};

export default About;