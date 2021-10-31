import React, {useEffect, useState} from 'react';
import AboutPanel from './AboutPanel/AboutPanel';
import TermsPanel from './TermsPanel/TermsPanel';
import {AboutBackdrop, AboutPanelWrapper} from '../../styled';
import {AnimatedContent} from '../../posed';
import {fadeTimeout, getRandomRotationClass, WEBSITE_TEXT} from '../../data/constants';
import Spinner from '../UI/Spinner/Spinner';

const About = props => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    //specifies whether publication terms for authors should be displayed in place of the regular about page
    const [pubTerms, setPubTerms] = useState(false);

    //specifies whether the spinner should be visible
    const [spinnerVisible, setSpinnerVisible] = useState(true);

    //class specifying spinner orientation
    const spinnerClass = getRandomRotationClass();

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
        //when page loads, trigger fade-in animation and hide spinner
        setTimeout(() => setContentVisible(true), fadeTimeout);
        setTimeout(() => setSpinnerVisible(false), fadeTimeout);
    });

    return (
        <React.Fragment>
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
            {spinnerVisible && <Spinner spinnerClass={spinnerClass}/>}
        </React.Fragment>
    );
};

export default About;