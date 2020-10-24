import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


const MessageWrapper = styled.div`

`;

const ErrorMessage = (props) => {

    return (
        props.error &&
        <MessageWrapper>
            ERROR
        </MessageWrapper>
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