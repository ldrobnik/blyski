import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {AboutPanelWrapper, Backdrop} from "../../styled";
import AboutPanel from './AboutPanel/AboutPanel';
import {WEBSITE_TEXT, AnimatedContent, fadeTimeout} from "../../data/constants";

const About = (props) => {

    //specifies whether the content should be shown
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        //Scroll to top
        window.scrollTo(0, 0);

        //update document title
        document.title = WEBSITE_TEXT.title.main + WEBSITE_TEXT.title.about;
    }, []);

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
                <AboutPanel/>
            </AboutPanelWrapper>
            <Backdrop/>
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(About);