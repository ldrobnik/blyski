import React from 'react';
import {SeparatorWrapper, SeparatorContent, InvertedSeparatorContent} from '../../../styled';

const Separator = props => {

    return (
        <SeparatorWrapper>
            {props.inverted ?
                <InvertedSeparatorContent/> :
                <SeparatorContent/>
            }

        </SeparatorWrapper>
    );
};

export default Separator;