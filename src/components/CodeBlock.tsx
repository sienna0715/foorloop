import { useState } from 'react';
import styled from 'styled-components';
import { CopyBlock, hybrid } from 'react-code-blocks';
// components
import { PALLETTE_MAIN } from '../styles/colors';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../breakpoint';

const CodeBlockContainer = styled.div`
  .border {
    border-top-left-radius: 0;
  }
`;
const TabBox = styled.div`
  width: 70rem;
  height: 8rem;
  margin-bottom: -3rem;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-bottom: none;
  background-color: ${PALLETTE_MAIN.code};
  ${FONT_STYLE_V1.text.text_18_medium};
  display: flex;
  justify-content: flex-start;
  .current {
    height: 5.2rem;
    background-color: ${PALLETTE_MAIN.code};
    border: 1px solid ${PALLETTE_MAIN.sub_main};
    border-bottom: none;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    width: 65rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_16_medium}
    width: 55rem;
    height: 7rem;
    .current {
      height: 4.1rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
    width: 30rem;
    height: 6.5rem;
    .current {
      height: 3.6rem;
    }
  }
`;
const CodeBox = styled.div`
  ${FONT_STYLE_V1.text.text_16_medium};
  width: 70rem;
  height: 45rem;
  padding: 3rem 1rem;
  background-color: ${PALLETTE_MAIN.code};
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
    display: none;
  }
  span {
    &::-webkit-scrollbar {
      height: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      background: ${PALLETTE_MAIN.main};
    }
    &::-webkit-scrollbar-track {
      background: ${PALLETTE_MAIN.code};
      border: none;
    }
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    width: 65rem;
    height: 40rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
    width: 55rem;
    height: 25rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_10_medium};
    width: 30rem;
    height: 25rem;
  }
`;
const Tab = styled.li`
  margin-bottom: 3rem;
  padding: 0 4rem;
  margin-top: -0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:nth-child(1) {
    border-left: none;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
    padding: 0 3rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
  }
`;

interface ICodeBlockProps {
  titles: string[];
  codes: string[];
}

function CodeBlock({
  titles = ['React', 'SVG'],
  codes = ['', ''],
}: ICodeBlockProps) {
  const [currentTab, setCurrentTab] = useState(1);
  const TabMenus = [
    { id: 1, name: titles[0] },
    { id: 2, name: titles[1] },
  ];

  return (
    <CodeBlockContainer>
      <TabBox>
        {TabMenus.map((menu) => (
          <Tab
            key={menu.id}
            className={menu.id === currentTab ? 'current' : ''}
            onClick={() => setCurrentTab(menu.id)}
          >
            {menu.name}
          </Tab>
        ))}
      </TabBox>
      <CodeBox className={currentTab === 1 ? 'border' : ''}>
        {currentTab === 1 ? (
          <CopyBlock
            theme={hybrid}
            text={codes[0]}
            codeBlock
            copied
            wrapLongLines={false}
            language="jsx"
          />
        ) : (
          <CopyBlock
            theme={hybrid}
            text={codes[1]}
            copied
            codeBlock
            wrapLongLines={false}
            language="jsx"
          />
        )}
      </CodeBox>
    </CodeBlockContainer>
  );
}

export default CodeBlock;
