import React, {useState} from 'react';
import styled from 'styled-components';

import animatedLogo from '../../../assets/images/animatedGlider.png';

import {getRandomRotationClass} from "../../../data/constants";

/* STYLED COMPONENTS */
const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 90;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  img {
    height: 150px;
  }
`;


const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 80;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.lightColor};
`;

const Spinner = props => {

    return (
        <React.Fragment>
            <SpinnerWrapper>

                    <img
                        src={animatedLogo}
                        alt='loading spinner'
                        className={props.spinnerClass}
                    />
            </SpinnerWrapper>
            <Backdrop/>
        </React.Fragment>
    );
};

export default Spinner;