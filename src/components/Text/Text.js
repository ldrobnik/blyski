import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import TextNavbar from './TextNavbar/TextNavbar';
import Story from './Story/Story';
import Bio from './Bio/Bio';
import TextButton from './TextButton/TextButton';
import Separator from '../UI/Separator/Separator';
import {TextContentWrapper, TextWrapper} from '../../styled';
import {AnimatedContent} from '../../posed';
import {fadeTimeout, formatIssueNumber} from '../../data/constants';

const Text = (props) => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    let history = useHistory();

    //based on the url, checks which text from which issue should be displayed
    const checkTextID = (issue, slug) => {

        //if text data cannot be accessed (in case of connection error), return '-1'
        if (!props.issues[issue - 1]) return -1;

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

            //if text data cannot be accessed (wrong slug or connection error), redirect to home page
            if ((textID === -1) || (props.issues[issueNumber - 1] === null)) {
                history.push('/');
            }

            //update document title
            if ((textID === -2) && props.issues[issueNumber - 1]) {
                //title for bio
                document.title = formatIssueNumber(issueNumber) + ' – ' + props.issues[issueNumber - 1].author + ' – biogram';
            } else if (props.issues[issueNumber - 1]) {
                //title for literary pieces
                document.title = formatIssueNumber(issueNumber) + ' – ' + props.issues[issueNumber - 1].author + ' – ' + props.issues[issueNumber - 1].texts[textID].title;
            }

        }
    });

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        //Scroll to top when text ID changes
        window.scrollTo(0, 0);
    }, [textID]);


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
    let textTitle = '';
    if (props.pageLoaded && props.issues[issueNumber - 1]) textTitle = (textID === -2) ? props.issues[issueNumber - 1].bio.title : props.issues[issueNumber - 1].texts[textID].title;

    //content to be displayed - different for bio
    let textContent = '';
    if (props.pageLoaded && props.issues[issueNumber - 1]) textContent = (textID === -2) ? props.issues[issueNumber - 1].bio.content : props.issues[issueNumber - 1].texts[textID].content;

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            {(props.pageLoaded && props.issues[issueNumber - 1]) && <TextNavbar
                issueNumber={issueNumber}
                textID={textID}
                texts={props.issues[issueNumber - 1].texts}
            />}
            <TextContentWrapper>
                <TextWrapper>
                    {(props.pageLoaded && (textID !== -1) && props.issues[issueNumber - 1]) && (textID !== -2) &&
                    <Story
                        author={props.issues[issueNumber - 1].author}
                        textTitle={textTitle}
                        textContent={textContent}
                    />}
                    {(props.pageLoaded) && (textID === -2) && props.issues[issueNumber - 1] &&
                    <Bio
                        author={props.issues[issueNumber - 1].author}
                        issueNumber={issueNumber}
                        textContent={textContent}
                    />}
                    {(props.pageLoaded && props.issues[issueNumber - 1]) &&
                    <React.Fragment>
                        <Separator/>
                        <TextButton
                            textID={textID}
                            issueNumber={issueNumber}
                            slug={((textID < 4) && (textID !== -2)) ? props.issues[issueNumber - 1].texts[textID + 1].slug : null}
                        />
                    </React.Fragment>
                    }
                </TextWrapper>
            </TextContentWrapper>
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