import React from 'react';
import {connect} from 'react-redux';
import {ErrorMessageWrapper, ErrorMessageContent} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';

const ErrorMessage = (props) => {

    return (
        props.error && props.pageLoaded && (props.issues.length > 1) &&
        <ErrorMessageWrapper>
            <ErrorMessageContent>
                {WEBSITE_TEXT.error}
            </ErrorMessageContent>
        </ErrorMessageWrapper>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        issues: state.issues,
        error: state.error
    }
};

export default connect(mapStateToProps)(ErrorMessage);