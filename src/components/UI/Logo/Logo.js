import React, {useState} from 'react';
import styled from 'styled-components';

import logoFrame1 from '../../../assets/images/glider1.svg';
import logoFrame2 from '../../../assets/images/glider2.svg';
import logoFrame3 from '../../../assets/images/glider3.svg';
import logoFrame4 from '../../../assets/images/glider4.svg';

const LogoWrapper = styled.div`
  padding: 12px;
  border: 10px solid ${props => props.theme.themeColor};
`;

const Logo = props => {

    //array containing all logo components
    const logo = [logoFrame1, logoFrame2, logoFrame3, logoFrame4];
    return (
        <LogoWrapper>
            <object data={logo[props.logoFrame]} width="100px" type="image/svg+xml">
                błyski – logo
            </object>
        </LogoWrapper>
    );
};

export default Logo;