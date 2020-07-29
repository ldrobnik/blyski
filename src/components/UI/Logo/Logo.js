import React, {useState} from 'react';
import styled from 'styled-components';

import animatedLogo from '../../../assets/images/animatedGlider.png';

import {getRotationClass} from "../../../data/constants";

/* STYLED COMPONENTS */
const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
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