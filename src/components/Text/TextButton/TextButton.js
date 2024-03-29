import React from 'react';
import HoverableButton from '../../UI/HoverableButton/HoverableButton';
import {TextButtonWrapper} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';

const TextButton = props => {

    return (
        <TextButtonWrapper>
            {((props.textId < 4) && (props.textId !== -2)) &&
            <HoverableButton
                path={`/${props.issueNumber}/${props.slug}`}
                message={WEBSITE_TEXT.text.nextButton}
            />}
            {(props.textId === 4) &&
            <HoverableButton
                path={`/${props.issueNumber}/bio`}
                message={WEBSITE_TEXT.text.bioButton}
            />}
            {(props.textId === -2) &&
            <HoverableButton
                path="/"
                message={WEBSITE_TEXT.text.homeButton}
            />}
        </TextButtonWrapper>
    );
};

export default TextButton;