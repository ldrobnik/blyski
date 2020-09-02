import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import TextNavbar from './TextNavbar/TextNavbar';
import HoverableButton from '../UI/HoverableButton/HoverableButton';
import {WEBSITE_TEXT} from "../../data/constants";

const TextWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const TextTitle = styled.div`
 color: ${props => props.theme.themeColor};
 font-size: 2.2em;
 font-weight: bold;
`;

const Author = styled.div`
 font-size: 1.4em;
 font-weight: bold;
`;
const Text = (props) => {

    let history = useHistory();

    //based on the url, checks which text from which issue should be displayed
    const checkTextID = (issue, slug) => {

        //if slug is 'bio', return '-2'
        if (slug === 'bio') return -2;

        //loop through the text of a given issue and return its idea if there's a match
        for (let i = 0; i < props.issues[issue - 1].texts.length; i++) {
            if (props.issues[issue - 1].texts[i].slug === slug) {
                return i;
            }
        }


        //if there's no match, return '-1'
        return -1;
    };


    //get issue number based on url parameter
    let issueNumber = props.match.params.issue;

    //if issue number doesn't exceed array length get text id based on url parameters
    let textID = (issueNumber <= props.issues.length) ? checkTextID(issueNumber, props.match.params.slug) : -1;

    useEffect(() => {


        if (props.pageLoaded) {

            //if the issue and slug don't match fetched data, redirect to home page
            if (textID === -1) {
                history.push('/');
            }
        }
    });

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);
    }, []);

    //text title to be displayed - author name for bio, text title for pieces
    let textTitle = "";
    if (props.pageLoaded) textTitle = (textID === -2) ? props.issues[issueNumber - 1].bio.title : props.issues[issueNumber - 1].texts[textID].title;

    //content to be displayed - different for bio
    let textContent = "";
    if (props.pageLoaded) textContent = (textID === -2) ? props.issues[issueNumber - 1].bio.content : props.issues[issueNumber - 1].texts[textID].content;

    return (
        <React.Fragment>
            {(props.pageLoaded) && <TextNavbar
                issueNumber={issueNumber}
                textID={textID}
                texts={props.issues[issueNumber - 1].texts}
            />}
            <TextWrapper>
                {(props.pageLoaded && (textID !== -1)) &&
                <React.Fragment>
                    {(textID !== -2) && <Author>{props.issues[issueNumber - 1].author}</Author>}
                    <TextTitle>{textTitle}</TextTitle>
                    <div
                        dangerouslySetInnerHTML={{__html: textContent}}
                    />
                </React.Fragment>}
                <ButtonWrapper>
                    {(props.pageLoaded && (textID < 4) && (textID !== -2)) &&
                    <HoverableButton
                        path={`/${issueNumber}/${props.issues[issueNumber - 1].texts[textID + 1].slug}`}
                        message={WEBSITE_TEXT.text.nextButton}
                    />}
                    {(props.pageLoaded && (textID === 4)) &&
                    <HoverableButton
                        path={`/${issueNumber}/bio`}
                        message={WEBSITE_TEXT.text.bioButton}
                    />}
                    {(props.pageLoaded && (textID === -2)) &&
                    <HoverableButton
                        path="/"
                        message={WEBSITE_TEXT.text.homeButton}
                    />}
                </ButtonWrapper>
            </TextWrapper>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        issues: state.issues
    }
};

export default connect(mapStateToProps)(Text);