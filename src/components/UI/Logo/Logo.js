import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import logoFrame1 from '../../../assets/images/glider1.svg';
import logoFrame2 from '../../../assets/images/glider2.svg';
import logoFrame3 from '../../../assets/images/glider3.svg';
import logoFrame4 from '../../../assets/images/glider4.svg';

import invLogoFrame1 from '../../../assets/images/inv-glider1.svg';
import invLogoFrame2 from '../../../assets/images/inv-glider2.svg';
import invLogoFrame3 from '../../../assets/images/inv-glider3.svg';
import invLogoFrame4 from '../../../assets/images/inv-glider4.svg';

/* STYLED COMPONENTS */
const LogoWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 12px;
  z-index: 160;
  
  @media all and (max-width: 630px) {
      display: inline-block;
      margin-bottom: 24px;
    }
  
`;

const InvertedLogoWrapper = styled.div`
  border: 10px solid ${props => props.theme.lightColor};
  padding: 12px;
  z-index: 160;
  
    
  @media all and (max-width: 630px) {
      display: inline-block;
      margin-bottom: 24px;
    }
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
        } else if (window.innerWidth < 630) {
            setLogoWidth("80px");
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

        console.log(props.inverted);
        window.addEventListener("resize", handleResize, false);

        return () => {
            window.removeEventListener("resize", handleResize, false);
        };
    }, []);


    //array containing all logo frames - colour depending on the 'inverted' prop setting
    const logo = props.inverted ? [invLogoFrame1, invLogoFrame2, invLogoFrame3, invLogoFrame4] : [logoFrame1, logoFrame2, logoFrame3, logoFrame4];

    //svg object displaying logo
    const logoImage = <object
        data={logo[props.logoFrame]}
        width={logoWidth}
        height={logoWidth}
        type="image/svg+xml"
        onLoad={() => setContentVisible(true)}
    >
        błyski – logo
    </object>;

    return (
        <AnimatedLogo
            pose={contentVisible ? 'visible' : 'hidden'}>
            {props.inverted ?
                <InvertedLogoWrapper>
                    {logoImage}
                </InvertedLogoWrapper> :
                <LogoWrapper>
                    {logoImage}
                </LogoWrapper>
            }
        </AnimatedLogo>
    );
};

export default Logo;