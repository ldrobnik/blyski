import React from 'react';
import {InactiveButtonWrapper, InvertedInactiveButtonWrapper} from '../../../styled';

const InactiveButton = (props) => {

    //constant holding the button content
    const buttonMessage = props.message;

    return (
        <React.Fragment>
            {(props.inverted) ? (
                <InvertedInactiveButtonWrapper>
                    {buttonMessage}
                </InvertedInactiveButtonWrapper>
            ) : (
                <InactiveButtonWrapper>
                    {buttonMessage}
                </InactiveButtonWrapper>
            )}
        </React.Fragment>
    );
};

export default InactiveButton;