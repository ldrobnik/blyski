import React from 'react';
import styled from 'styled-components';

/** STYLED COMPONENTS **/

const SeparatorWrapper = styled.div`
  text-align: center;
  padding: 12px 0;
`;

const SeparatorContent = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.themeColor};
  height: 6px;
  width: 20px;
`;

const InvertedSeparatorContent = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.lightColor};
  height: 6px;
  width: 20px;
`;

const Separator = (props) => {

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