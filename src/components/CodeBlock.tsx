import { useState } from 'react';
import styled from 'styled-components';
import { CopyBlock, hybrid } from 'react-code-blocks';
// components
import { PALLETTE_MAIN } from '../styles/colors';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../breakpoint';

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
    height: 5rem;
    background-color: ${PALLETTE_MAIN.code};
    border: 1px solid ${PALLETTE_MAIN.sub_main};
    border-bottom: none;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 40rem;
    height: 7rem;
    margin-bottom: -3rem;
    ${FONT_STYLE_V1.text.text_16_medium}
    .current {
      height: 4rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30rem;
    height: 6rem;
    margin-bottom: -3rem;
    ${FONT_STYLE_V1.text.text_14_medium}
    .current {
      height: 3rem;
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
  /* &::-webkit-scrollbar-thumb {
    height: 1rem;
    background: ${PALLETTE_MAIN.sub_main};
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: ${PALLETTE_MAIN.code};
  } */
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium};
    width: 40rem;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:nth-child(1) {
    border-left: none;
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
            codeBlock
            copied
            wrapLongLines={false}
            language="jsx"
          />
        )}
      </CodeBox>
    </CodeBlockContainer>
  );
}

export default CodeBlock;
