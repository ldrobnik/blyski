import React from "react";
import Markdown from "markdown-to-jsx/dist/index.js";
import { WEBSITE_TEXT } from "../../../data/constants";
import Separator from "../../UI/Separator/Separator";
import {
  StoryTextTitle,
  StoryAuthor,
  StoryTranslatedBy,
  StoryTextBody,
  StoryCredits,
} from "../../../styled";

const Story = (props) => {
  return (
    <React.Fragment>
      <StoryAuthor>{props.author}</StoryAuthor>
      <StoryTextTitle>{props.textTitle}</StoryTextTitle>
      <StoryTranslatedBy>{WEBSITE_TEXT.issueList.translator}</StoryTranslatedBy>
      <StoryTextBody>
        <Markdown
          options={{
            overrides: {
              separator: {
                component: Separator,
              },
              credits: {
                component: StoryCredits,
              },
            },
          }}
        >
          {props.textContent}
        </Markdown>
      </StoryTextBody>
    </React.Fragment>
  );
};

export default Story;
