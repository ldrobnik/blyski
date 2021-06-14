import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import InactiveButton from '../../UI/InactiveButton/InactiveButton';
import IssueButton from "../IssueButton/IssueButton";
import {WEBSITE_TEXT, formatIssueNumber} from "../../../data/constants";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: ${props => props.theme.themeColor};
  font-weight: bold;
  font-size: 1.5em;
  border-bottom: solid 10px ${props => props.theme.themeColor};
  padding-bottom: 15px;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  
  div, a {
  max-height: 30px;
  }
`;

const TextNavbar = props => {

    return (
        <React.Fragment>
            <TitleWrapper>
                <Title>
                    <IssueButton
                        path={`/${props.issueNumber}`}
                        message={formatIssueNumber(props.issueNumber)}/>
                </Title>
            </TitleWrapper>
            <NavbarWrapper>
                <Navbar>
                    {WEBSITE_TEXT.text.navbar.textNumbers.map((navlink, index) => {
                        return (
                            <React.Fragment key={index}>
                                {(index === props.textID) ?

                                    <InactiveButton
                                        message={navlink}
                                    />
                                    :
                                    <HoverableButton
                                        path={`/${props.issueNumber}/${props.texts[index].slug}`}
                                        message={navlink}
                                    />}
                            </React.Fragment>
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
        </React.Fragment>
    );
};

export default TextNavbar;