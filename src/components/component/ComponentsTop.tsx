import { useState } from 'react';
import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import codeDatas from '../../data/componentsCodeDatas';
import CodeBlock from '../CodeBlock';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../../breakpoint';

const ComponentsTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 26rem;
  border-bottom: 1px solid ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding-bottom: 18rem;
  }
`;
const PreviewBox = styled.div`
  margin-right: 13rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
  }
`;
const CodeBlockBox = styled.div``;

const Preview = styled.div<{ $fill: string }>`
  width: 60rem;
  height: 60rem;
  background-color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.main : PALLETTE_MAIN.sub_main};
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 25rem;
    height: 25rem;
  }
`;
const BackgroundToggle = styled.div<{ $fill: string }>`
  ${FONT_STYLE_V1.text.text_16_medium}
  width: 8rem;
  height: 3rem;
  margin-bottom: 2rem;
  padding: 0 0.75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 2.5rem;
  background-color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.sub_main : PALLETTE_MAIN.main};
  color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.main : PALLETTE_MAIN.sub_main};
  transition: background-color 0.5s ease-in;
  cursor: pointer;
`;
const BackgroundToggleDot = styled.div<{ $fill: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.main : PALLETTE_MAIN.sub_main};
  transform: ${(props) =>
    props.$fill === 'true' ? 'translateX(40%)' : 'none'};
  transition: background-color transform 0.5s ease-in;
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`;
const TitleDot = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  border-radius: 50%;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
  }
`;
const TitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT_STYLE_V1.text.text_18_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
  }
`;
const ControlBar = styled.div`
  display: flex;
  margin-bottom: 5rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-bottom: 2rem;
  }
`;
const ControlTitle = styled.div`
  width: 18rem;
  height: 3.6rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 1.8rem;
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
    width: 7rem;
    height: 3rem;
    margin-right: 1rem;
  }
`;
const ControlInput = styled.input`
  width: 18rem;
  height: 3.6rem;
  padding: 1rem;
  background-color: transparent;
  color: ${PALLETTE_MAIN.sub_main};
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 1.8rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
    width: 16rem;
    height: 3rem;
    margin-left: 1rem;
  }
`;

interface IComponentsTopProps {
  currentItem: string;
}

function ComponentsTop({ currentItem }: IComponentsTopProps) {
  const [isFill, setIsFill] = useState('false');
  const datas = codeDatas[+currentItem];

  const isFillClickHandler = () => {
    if (isFill === 'true') {
      setIsFill('false');
    } else if (isFill === 'false') {
      setIsFill('true');
    }
  };

  return (
    <ComponentsTopWrap>
      <PreviewBox>
        <BackgroundToggle onClick={isFillClickHandler} $fill={isFill}>
          {isFill === 'true' ? 'Fill' : null}
          <BackgroundToggleDot $fill={isFill} />
          {isFill === 'true' ? null : 'Empty'}
        </BackgroundToggle>
        <Preview $fill={isFill}>{datas?.component}</Preview>
      </PreviewBox>
      <CodeBlockBox>
        <Title>
          <TitleDot />
          <TitleText>{`component > ${datas?.name} icon`}</TitleText>
        </Title>
        <ControlBar>
          <ControlTitle>Size</ControlTitle>
          <ControlInput type="text" />
        </ControlBar>
        <CodeBlock
          titles={['React', 'Styled-components']}
          codes={datas?.code}
        />
      </CodeBlockBox>
    </ComponentsTopWrap>
  );
}

export default ComponentsTop;
