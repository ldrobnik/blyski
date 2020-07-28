import React, {useState} from 'react';
import styled from 'styled-components';

import animatedLogo from '../../../assets/images/animatedGlider.png';

import {getRotationClass} from "../../../data/constants";

/* STYLED COMPONENTS */
const LogoWrapper = styled.div`
  z-index: 80;
  position: relative;
  left: 50px;
  top: 50px;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border: 2px solid ${props => props.theme.themeColor};
  
  img {
    height: 100px;
  }
`;

const Logo = props => {

    return (
        <React.Fragment>
            <LogoWrapper>

                <img
                    src={animatedLogo}
                    alt='loading spinner'
                    className={getRotationClass(props.position)}
                />
            </LogoWrapper>
        </React.Fragment>
    );
};

export default Logo;