import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import logoFrame1 from '../../../assets/images/glider1.svg';
import logoFrame2 from '../../../assets/images/glider2.svg';
import logoFrame3 from '../../../assets/images/glider3.svg';
import logoFrame4 from '../../../assets/images/glider4.svg';

/* STYLED COMPONENTS */
const LogoWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 12px;
`;

/* POSE */

const AnimatedLogo = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        opacity: 1,
        duration: 200,
        delay: 500,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        transform: 'scale(1, 0)',
        opacity: 0
    }
});

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

    //shows content after a random time
    const showContent = () => {
      setTimeout(() => setContentVisible(true), 5000)
    };

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
        <AnimatedLogo
            pose={contentVisible ? 'visible' : 'hidden'}>
            <LogoWrapper>
                <object
                    data={logo[props.logoFrame]}
                    width={logoWidth}
                    height={logoWidth}
                    type="image/svg+xml">
                    błyski – logo
                </object>
            </LogoWrapper>
        </AnimatedLogo>
    );
};

export default Logo;