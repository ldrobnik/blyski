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
import {ISSUES, fadeTimeout, formatIssueNumber} from '../../data/constants';
import {text} from '@fortawesome/fontawesome-svg-core';

const Text = props => {

    //text content to be displayed - either a story or a bio
    const [textContent, setTextContent] = useState('');
    
    //the id of the text to be displayed
    const [textId, setTextId] = useState(-1);

    //the number of the issue to be displayed
    const [issueNumber, setIssueNumber] = useState(0);

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    let history = useHistory();

    //based on the url, checks which text from which issue should be displayed
    const checkTextId = (issue, slug) => {

        //if the issue hasn't been published, return '-1'
        if (!ISSUES[issue - 1].published) return -1;

        //if slug is 'bio', set text id to '-2'
        if (slug === 'bio') return -2;

        //loop through the text of a given issue and if there's a match, return the id of text to be displayed
        for (let i = 0; i < ISSUES[issue - 1].texts.length; i++) {
            if (ISSUES[issue - 1].texts[i].slug === slug) {
                console.log(i, ISSUES[issue - 1].texts[i].slug, slug);
                return i;
            }
        }

        //if there's no match, return '-1'
        return -1;
    };

    //convert text id into part of file name
    const convertTextId = textId => {
      if (textId === -2) return 'bio';
      if (textId >= 0 && textId <= 4) return textId + 1;
    };

    //imports text to be displayed
    const importText = (issueNo, textId) => {

        //imports markdown document and coverts it into text
        import(`./../../data/texts/${issueNo}-${textId}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setTextContent(res))
                    .then(() => setContentVisible(true))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {


        //set issue number
        setIssueNumber(Number(props.match.params.issue));

        //set the id of text to be displayed
        setTextId(checkTextId(props.match.params.issue, props.match.params.slug));


    }, [props.match.params.issue, props.match.params.slug])


    useEffect(() => {
        importText(issueNumber, convertTextId(textId));
    }, [issueNumber, textId])

    useEffect(() => {

        //set issue number
        setIssueNumber(Number(props.match.params.issue));

        //set the id of text to be displayed
        setTextId(checkTextId(props.match.params.issue, props.match.params.slug))

        if (props.pageLoaded) {

            //if text data cannot be accessed (wrong slug or connection error), redirect to home page
            if ((textId === -1) || (props.issues[issueNumber - 1] === null)) {
                history.push('/');
            }

            //update document title
            if ((textId === -2) && props.issues[issueNumber - 1]) {
                //title for bio
                document.title = formatIssueNumber(issueNumber) + ' – ' + props.issues[issueNumber - 1].author + ' – biogram';
            } else if (props.issues[issueNumber - 1]) {
                //title for literary pieces
                document.title = formatIssueNumber(issueNumber) + ' – ' + props.issues[issueNumber - 1].author + ' – ' + props.issues[issueNumber - 1].texts[textId].title;
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
    }, [textId]);


    useEffect(() => {
        //when page loads, trigger fade-in animation after a while
        if (props.pageLoaded) {
            setTimeout(() => setContentVisible(true), fadeTimeout);
        }
    });

    useEffect(() => {
        //when path changes, make content invisible, then turn it on
        setContentVisible(false);

        // if (props.pageLoaded) {
        //     setTimeout(() => setContentVisible(true), fadeTimeout);
        // }
    }, [props.match.params]);

    //text title to be displayed - author name for bio, text title for pieces
    let textTitle = '';
    if (props.pageLoaded && props.issues[issueNumber - 1]) textTitle = (textId === -2) ? props.issues[issueNumber - 1].bio.title : props.issues[issueNumber - 1].texts[textId].title;

    //content to be displayed - different for bio
    // let textContent = '';
    // if (props.pageLoaded && props.issues[issueNumber - 1]) textContent = (textId === -2) ? props.issues[issueNumber - 1].bio.content : props.issues[issueNumber - 1].texts[textId].content;

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            {(props.pageLoaded && props.issues[issueNumber - 1]) && <TextNavbar
                issueNumber={issueNumber}
                textId={textId}
                texts={props.issues[issueNumber - 1].texts}
            />}
            <TextContentWrapper>
                <TextWrapper>
                    {(props.pageLoaded && (textId !== -1) && props.issues[issueNumber - 1]) && (textId !== -2) &&
                    <Story
                        author={props.issues[issueNumber - 1].author}
                        textTitle={textTitle}
                        textContent={textContent}
                    />}
                    {(props.pageLoaded) && (textId === -2) && props.issues[issueNumber - 1] &&
                    <Bio
                        author={props.issues[issueNumber - 1].author}
                        issueNumber={issueNumber}
                        textContent={textContent}
                    />}
                    {(props.pageLoaded && props.issues[issueNumber - 1]) &&
                    <React.Fragment>
                        <Separator/>
                        <TextButton
                            textId={textId}
                            issueNumber={issueNumber}
                            slug={((textId < 4) && (textId !== -2)) ? props.issues[issueNumber - 1].texts[textId + 1].slug : null}
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