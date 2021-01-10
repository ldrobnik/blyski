import React, {useState} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import photo1 from '../../../../assets/images/authorPhotos/1.jpg';
import photo2 from '../../../../assets/images/authorPhotos/2.jpg';
import photo3 from '../../../../assets/images/authorPhotos/3.jpg';
import photo4 from '../../../../assets/images/authorPhotos/4.jpg';
import photo5 from '../../../../assets/images/authorPhotos/5.jpg';

/*STYLED COMPONENTS*/
const Wrapper = styled.div`
  text-align: center;
  padding: 2em;
  position: relative; 
`;

const Photo = styled.div`
  height: 420px;
  z-index: 60;
  
  img {
      height: 100%;
  }
  
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
   height: 300px;
  }
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
      height: 240px;
    }
    
  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
      height: 180px;
    }
  
`;

/* POSE */
const AnimatedPic = posed.div({
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

const AuthorPhoto = (props) => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //array with all photo sources
    const authorPhotos = [photo1, photo2, photo3, photo4, photo5];

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <Wrapper>
            <AnimatedPic
                pose={visible ? 'visible' : 'hidden'}>
                <Photo>
                    <img
                        src={authorPhotos[props.issueNumber - 1]}
                        alt={`Zdjęcie autora: ${props.author}`}
                        onLoad={showPhoto}
                    />
                </Photo>
            </AnimatedPic>
        </Wrapper>
    );
};

export default AuthorPhoto;