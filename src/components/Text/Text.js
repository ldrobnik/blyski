import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import TextNavbar from './TextNavbar/TextNavbar';
import HoverableButton from '../UI/HoverableButton/HoverableButton';
import {WEBSITE_TEXT, AnimatedContent, fadeTimeout, formatIssueNumber} from "../../data/constants";

const TextWrapper = styled.div`
  border: 10px solid ${props => props.theme.themeColor};
  padding: 15px 25px;
  font-size: 1.2em;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const TextTitle = styled.div`
 color: ${props => props.theme.themeColor};
 font-size: 1.8em;
 font-weight: bold;
 padding: 5px 0;
`;

const Author = styled.div`
 font-size: 1.2em;
 font-weight: bold;
`;

const TranslatedBy = styled.div`
 font-style: italic;
 font-size: 0.8em;
`;

const Text = (props) => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

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

            //update document title
            if (textID === -2) {
                //title for bio
                document.title = formatIssueNumber(issueNumber) + " – " + props.issues[issueNumber - 1].author+ " – biogram";
            } else {
                //title for literary pieces
                document.title = formatIssueNumber(issueNumber) + " – " + props.issues[issueNumber - 1].author+ " – " + props.issues[issueNumber - 1].texts[textID].title;
            }

        }
    });

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        //when page loads, trigger fade-in animation after a while
        if (props.pageLoaded) {
            setTimeout(() => setContentVisible(true), fadeTimeout);
        }
    });

    useEffect(() => {
        //when path changes, make content invisible, then turn it on
        setContentVisible(false);

        if (props.pageLoaded) {
            setTimeout(() => setContentVisible(true), fadeTimeout);
        }
    }, [props.match.params]);

    //text title to be displayed - author name for bio, text title for pieces
    let textTitle = "";
    if (props.pageLoaded) textTitle = (textID === -2) ? props.issues[issueNumber - 1].bio.title : props.issues[issueNumber - 1].texts[textID].title;

    //content to be displayed - different for bio
    let textContent = "";
    if (props.pageLoaded) textContent = (textID === -2) ? props.issues[issueNumber - 1].bio.content : props.issues[issueNumber - 1].texts[textID].content;

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
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
                    {(textID !== -2) && <TranslatedBy>{WEBSITE_TEXT.issueList.translator}</TranslatedBy>}
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
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        issues: state.issues
    }
};

export default connect(mapStateToProps)(Text);