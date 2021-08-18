import React, {useState} from 'react';
import {AuthorPhotoWrapper, AuthorPhotoContainer} from '../../../../styled';
import {AnimatedAuthorPic} from '../../../../posed';
import photo1 from '../../../../assets/images/authorPhotos/1.jpg';
import photo2 from '../../../../assets/images/authorPhotos/2.jpg';
import photo3 from '../../../../assets/images/authorPhotos/3.jpg';
import photo4 from '../../../../assets/images/authorPhotos/4.jpg';
import photo5 from '../../../../assets/images/authorPhotos/5.jpg';

const AuthorPhoto = props => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //array with all photo sources
    const authorPhotos = [photo1, photo2, photo3, photo4, photo5];

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <AuthorPhotoWrapper>
            <AnimatedAuthorPic
                pose={visible ? 'visible' : 'hidden'}>
                <AuthorPhotoContainer>
                    <img
                        src={authorPhotos[props.issueNumber - 1]}
                        alt={`Zdjęcie autora: ${props.author}`}
                        onLoad={showPhoto}
                    />
                </AuthorPhotoContainer>
            </AnimatedAuthorPic>
        </AuthorPhotoWrapper>
    );
};

export default AuthorPhoto;