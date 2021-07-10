import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {WEBSITE_TEXT} from "../../../data/constants";

const MessageWrapper = styled.div`
  text-align: center;

`;

const MessageContent = styled.div`
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 30px;
  border: 6px solid ${props => props.theme.themeColor};
  color: ${props => props.theme.themeColor};
  font-weight: bold;
  
  @media all and (max-width: ${props => props.theme.mediumScr}) {
    margin: 0 20px;
    font-size: 0.8em;
    
  }
`;

const ErrorMessage = (props) => {

    return (
        props.error && props.pageLoaded && (props.issues.length > 1) &&
        <MessageWrapper>
            <MessageContent>
                {WEBSITE_TEXT.error}
            </MessageContent>
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