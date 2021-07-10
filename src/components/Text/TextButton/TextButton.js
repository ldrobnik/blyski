import React from 'react';
import styled from 'styled-components';
import HoverableButton from "../../UI/HoverableButton/HoverableButton";
import {WEBSITE_TEXT} from "../../../data/constants";

const ButtonWrapper = styled.div`
  text-align: center;
`;

const TextButton = props => {

    return (
        <ButtonWrapper>
            {((props.textID < 4) && (props.textID !== -2)) &&
            <HoverableButton
                path={`/${props.issueNumber}/${props.slug}`}
                message={WEBSITE_TEXT.text.nextButton}
            />}
            {(props.textID === 4) &&
            <HoverableButton
                path={`/${props.issueNumber}/bio`}
                message={WEBSITE_TEXT.text.bioButton}
            />}
            {(props.textID === -2) &&
            <HoverableButton
                path="/"
                message={WEBSITE_TEXT.text.homeButton}
            />}
        </ButtonWrapper>
    );
};

export default TextButton;