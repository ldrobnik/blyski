import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import AboutPanel from './AboutPanel/AboutPanel';
import TermsPanel from './TermsPanel/TermsPanel';
import {AboutBackdrop, AboutPanelWrapper} from '../../styled';
import {AnimatedContent} from '../../posed';
import {fadeTimeout, WEBSITE_TEXT} from '../../data/constants';

const About = props => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    //specifies whether publication terms for authors should be displayed in place of the regular about page
    const [pubTerms, setPubTerms] = useState(false);

    //checks whether the url contains the 'pub-terms' slug
    const checkPubTerms = () => {
        if (props.location.pathname.includes('pub-terms')) {
            setPubTerms(true);
        } else {
            setPubTerms(false);
        }
    };

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);

        //check the url and display publication terms if the pathname contains 'pub-terms'
        checkPubTerms();

        //update document title - different for publication terms
        document.title = pubTerms ? WEBSITE_TEXT.title.english : WEBSITE_TEXT.title.main + WEBSITE_TEXT.title.about;


    }, []);

    useEffect(() => {
        //update document title - different for publication terms
        document.title = pubTerms ? WEBSITE_TEXT.title.english : WEBSITE_TEXT.title.main + WEBSITE_TEXT.title.about;
    }, [pubTerms]);

    useEffect(() => {
        //when page loads, trigger fade-in animation after a while
        if (props.pageLoaded) {
            setTimeout(() => setContentVisible(true), fadeTimeout);
        }
    });

    return (
        <AnimatedContent
            pose={contentVisible ? 'visible' : 'hidden'}>
            <AboutPanelWrapper>
                {pubTerms ?
                    <TermsPanel/> :
                    <AboutPanel/>
                }
            </AboutPanelWrapper>
            <AboutBackdrop/>
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(About);