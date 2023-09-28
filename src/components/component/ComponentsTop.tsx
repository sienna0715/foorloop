import { useEffect, useState } from 'react';
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
  flex-direction: column;
  align-items: center;
`;
const ComponentsTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-width: ${1024}px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
  }
`;
const PreviewBox = styled.div`
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin-right: 5rem;
  }
  @media screen and (max-width: ${1024}px) {
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
    width: 55rem;
    height: 55rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 45rem;
    height: 45rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30rem;
    height: 30rem;
  }
`;
const Component = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    transform: scale(0.7);
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
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 7rem;
    height: 3rem;
    padding: ${(props) =>
      props.$fill === 'true' ? `0 1.2rem 0 0.8rem` : `0 0.2rem 0 0.5rem`};
    ${FONT_STYLE_V1.text.text_10_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 5rem;
    height: 2rem;
    padding: ${(props) =>
      props.$fill === 'true' ? `0 1.2rem 0 0.8rem` : `0 0.4rem 0 0.4rem`};
    ${FONT_STYLE_V1.text.text_10_medium}
    margin-right: 1rem;
  }
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
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 2rem;
    height: 2rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 1rem;
    height: 1rem;
    transform: ${(props) =>
      props.$fill === 'true' ? 'translateX(100%)' : 'none'};
  }
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const TitleDot = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  border-radius: 50%;
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
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
  }
`;
const ControlBar = styled.div`
  display: flex;
  margin-bottom: 5rem;
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
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_18_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
    width: 7rem;
    height: 3rem;
    margin-right: 1rem;
  }
`;
const ControlInput = styled.input`
  width: 50rem;
  height: 3.6rem;
  padding: 1rem;
  background-color: transparent;
  color: ${PALLETTE_MAIN.sub_main};
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 1.8rem;
  ${FONT_STYLE_V1.text.text_16_medium}
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    width: 45rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
    width: 35rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 21rem;
    height: 3rem;
    margin-left: 1rem;
  }
`;

const Bar = styled.div`
  width: 100%;
  border-bottom: 1px solid ${PALLETTE_MAIN.sub_main};
  padding-top: 26rem;
  @media screen and (max-width: ${1024}px) {
    padding-top: 18rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 90%;
    padding-top: 18rem;
  }
`;

interface IComponentsTopProps {
  currentItem: string;
}

export const value = { size: 0 };

function ComponentsTop({ currentItem }: IComponentsTopProps) {
  const [isFill, setIsFill] = useState('false');
  const [size, setSize] = useState(0);
  const datas = codeDatas[+currentItem];
  const code = datas?.code[0].replace('size', `${size}`);

  const isFillClickHandler = () => {
    if (isFill === 'true') {
      setIsFill('false');
    } else if (isFill === 'false') {
      setIsFill('true');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(+e.target.value);
  };

  useEffect(() => {
    value.size = size;
  }, [size]);

  return (
    <ComponentsTopWrap>
      <ComponentsTopContainer>
        <PreviewBox>
          <BackgroundToggle onClick={isFillClickHandler} $fill={isFill}>
            {isFill === 'true' ? 'Fill' : null}
            <BackgroundToggleDot $fill={isFill} />
            {isFill === 'true' ? null : 'Empty'}
          </BackgroundToggle>
          <Preview $fill={isFill}>
            <Component>{datas?.component}</Component>
          </Preview>
        </PreviewBox>
        <CodeBlockBox>
          <Title>
            <TitleDot />
            <TitleText>{`component > ${datas?.name} icon`}</TitleText>
          </Title>
          <ControlBar>
            <ControlTitle>Size</ControlTitle>
            <ControlInput
              type="text"
              placeholder="Please enter the number type"
              onChange={handleChange}
            />
          </ControlBar>
          <CodeBlock titles={['React', '']} codes={[code, datas?.code[1]]} />
        </CodeBlockBox>
      </ComponentsTopContainer>
      <Bar />
    </ComponentsTopWrap>
  );
}

export default ComponentsTop;
