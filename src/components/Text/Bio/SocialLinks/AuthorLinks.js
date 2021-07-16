import React from 'react';
import HoverableButton from '../../../UI/HoverableButton/HoverableButton';
import {AuthorMenuWrapper, AuthorSocialIcons} from '../../../../styled';

const AuthorLinks = props => {

    return (
        <AuthorMenuWrapper>
            <AuthorSocialIcons>
                {props.links.map((link) => {
                    return (
                        <HoverableButton
                            key={link.url}
                            path={link.url}
                            message={link.icon}
                        />
                    )
                })}
            </AuthorSocialIcons>
        </AuthorMenuWrapper>
    );
};

export default AuthorLinks;