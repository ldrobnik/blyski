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
  background: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
`;

const Spinner = () => {

    return (
        <React.Fragment>
            <SpinnerWrapper>

                    <img
                        src={animatedLogo}
                        alt='loading spinner'
                        className={getRandomRotationClass()}
                    />
            </SpinnerWrapper>
            <Backdrop/>
        </React.Fragment>
    );
};

export default Spinner;