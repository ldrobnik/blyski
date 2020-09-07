import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkList = styled.div`
  margin: 5px;
  padding: 10px;
  display: inline-block;
`;

const SocialLinks = props => {

    return (
        <ListWrapper>
            <LinkList>
                {props.works.map((work) => {
                    return (
                        <a
                            key={work.url}
                            href={work.url}

                        >{work.title}</a>
                    )
                })}
            </LinkList>
        </ListWrapper>
    );
};

export default SocialLinks;