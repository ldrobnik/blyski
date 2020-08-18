import React, {useState} from 'react';
import styled from 'styled-components';

import {ReactComponent as LogoFrame1} from '../../../assets/images/glider1.svg';
import {ReactComponent as LogoFrame2} from '../../../assets/images/glider2.svg';
import {ReactComponent as LogoFrame3} from '../../../assets/images/glider3.svg';
import {ReactComponent as LogoFrame4} from '../../../assets/images/glider4.svg';

/* STYLED COMPONENTS */
const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  
  @media all and (max-width: 552px) {
      height: 60px;
      width: 60px;
    }
    
  @media all and (max-width: 350px) {
      height: 40px;
      width: 40px;
    }
  
  img {
    height: 100px;
    width: 100px;
    
    @media all and (max-width: 552px) {
      height: 60px;
      width: 60px;
    }
    
    @media all and (max-width: 350px) {
      height: 40px;
      width: 40px;
    }
  }
`;

const Logo = props => {

    //array containing all logo components
    const logo = [<LogoFrame1/>, <LogoFrame2/>, <LogoFrame3/>, <LogoFrame4/>];
    return (
            <LogoWrapper>
                {logo[props.logoFrame]}
            </LogoWrapper>
    );
};

export default Logo;