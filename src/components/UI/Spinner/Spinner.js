import React from 'react';
import {SpinnerBackdrop, SpinnerWrapper} from '../../../styled';
import animatedLogo from '../../../assets/images/animatedGlider.png';

const Spinner = props => {

    return (
        <React.Fragment>
            <SpinnerWrapper>
                <img
                    src={animatedLogo}
                    alt='loading spinner'
                    className={props.spinnerClass}
                />
            </SpinnerWrapper>
            <SpinnerBackdrop/>
        </React.Fragment>
    );
};

export default Spinner;