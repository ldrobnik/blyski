import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {AnimatedContent} from "../../../data/constants";

import logoFrame1 from '../../../assets/images/glider1.svg';
import logoFrame2 from '../../../assets/images/glider2.svg';
import logoFrame3 from '../../../assets/images/glider3.svg';
import logoFrame4 from '../../../assets/images/glider4.svg';

/* STYLED COMPONENTS */
const LogoWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 12px;
`;

const Logo = props => {

    // Specifies the current window width
    const [logoWidth, setLogoWidth] = useState("100px");

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    //updates window width
    const handleResize = () => {
        if (window.innerWidth < 350) {
            setLogoWidth("40px");
        } else if (window.innerWidth < 552) {
            setLogoWidth("60px");
        } else {
            setLogoWidth("100px");
        }
    };

    //adjusts initial logo width
    useEffect(() => {
        handleResize();
    }, []);

    //adds/removes event listener for resize
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        return () => {
            window.removeEventListener("resize", handleResize, false);
        };
    }, []);


    //array containing all logo components
    const logo = [logoFrame1, logoFrame2, logoFrame3, logoFrame4];
    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            <LogoWrapper>
                <object data={logo[props.logoFrame]} width={logoWidth} height={logoWidth} type="image/svg+xml" onLoad={() => setContentVisible(true)}>
                    błyski – logo
                </object>
            </LogoWrapper>
        </AnimatedContent>
    );
};

export default Logo;