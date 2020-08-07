import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import InactiveButton from '../../UI/InactiveButton/InactiveButton';
import {WEBSITE_TEXT, formatIssueNumber} from "../../../data/constants";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
 
  .active {
    background-color: ${props => props.theme.themeColor};
  }
`;

const TextNavbar = props => {

    return (
        <NavbarWrapper>
            <Navbar>
                <InactiveButton
                    message={formatIssueNumber(props.issueNumber)}
                    inverted={true}
                />
                {WEBSITE_TEXT.text.navbar.textNumbers.map((navlink, index) => {
                    return (
                        <div key={index}>
                            {(index === props.textID) ?

                                <InactiveButton
                                    message={navlink}
                                />
                                :
                                <HoverableButton
                                    path={`/${props.issueNumber}/${props.texts[index].slug}`}
                                    message={navlink}
                                />}
                        </div>
                    )
                })}
                {(props.textID === -2) ?

                    <InactiveButton
                        message={WEBSITE_TEXT.text.navbar.bio}
                    />
                    :
                    <HoverableButton
                        path={`/${props.issueNumber}/bio`}
                        message={WEBSITE_TEXT.text.navbar.bio}
                    />}
                <HoverableButton
                    path="/"
                    message={WEBSITE_TEXT.text.navbar.home}
                />
            </Navbar>

        </NavbarWrapper>
    );
};

export default TextNavbar;