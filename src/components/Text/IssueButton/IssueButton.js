import React from 'react';
import {Link} from 'react-router-dom';

import {IssueButtonWrapper, IssueInvertedButtonWrapper} from "../../../styled";

const IssueButton = props => {

    //constant holding the button content
    const buttonMessage = props.message;

    //the content of the button; for inverted button switch colors
    const buttonContent = props.inverted ? (
            <IssueInvertedButtonWrapper>
                {buttonMessage}
            </IssueInvertedButtonWrapper>
        ) : (
            <IssueButtonWrapper>
                {buttonMessage}
            </IssueButtonWrapper>
        )
    ;

    return (
        <React.Fragment>
            {(props.path[0] === '/') ?
                <Link
                    to={props.path}
                >
                    {buttonContent}
                </Link> :
                <a
                    href={props.path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonContent}
                </a>
            }
        </React.Fragment>
    );
};

export default IssueButton;