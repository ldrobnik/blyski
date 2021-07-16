import React from 'react';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import {MainNavbarWrapper, MainNavbarBody} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';


const MainNavbar = props => {

    return (
        <MainNavbarWrapper>
            <MainNavbarBody>
                {WEBSITE_TEXT.mainNavbar.map((navlink) => {
                    return (
                        <HoverableButton
                            key={navlink.path}
                            path={navlink.path}
                            message={navlink.message}
                        />
                    )
                })}
            </MainNavbarBody>
        </MainNavbarWrapper>
    );
};

export default MainNavbar;