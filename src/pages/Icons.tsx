import { useState } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { PALLETTE_MAIN } from '../styles/colors';
import CodeBlock from '../components/CodeBlock';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import data from '../data/iconData';
import {
  BREAKPOINTDESKTOP,
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
} from '../breakpoint';

const Wrapper = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16.5rem;
  margin-bottom: 18rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    margin: 0 8rem;
    margin-bottom: 18rem;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin: 0 2rem;
    margin-bottom: 18rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0;
    margin-bottom: 10rem;
  }
`;

const PreView = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 13rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    gap: 8rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    gap: 5rem;
  }
`;

const IconPreView = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const ZoomIcon = styled.div<{ $fill: string }>`
  width: 68rem;
  height: 68rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.main : PALLETTE_MAIN.sub_main};
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 50%;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    width: 55rem;
    height: 55rem;
    > svg {
      width: 30rem;
      height: 30rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 40rem;
    height: 40rem;
    > svg {
      width: 20rem;
      height: 20rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 28rem;
    height: 28rem;
    > svg {
      width: 15rem;
      height: 15rem;
    }
  }
`;

const IconBackgroundToggle = styled.div<{ $fill: string }>`
  position: absolute;
  width: 12rem;
  height: 5rem;
  padding: ${(props) =>
    props.$fill === 'true' ? `0 3rem 0 2rem` : `0 0.75rem`};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 2.5rem;
  background-color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.sub_main : PALLETTE_MAIN.main};
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.main : PALLETTE_MAIN.sub_main};
  transition: background-color 0.5s ease-in;

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
  }
`;

const IconBackgroundToggleDot = styled.div<{ $fill: string }>`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: ${(props) => (props.$fill === 'true' ? null : '0.4rem')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.$fill === 'true' ? PALLETTE_MAIN.main : PALLETTE_MAIN.sub_main};
  transform: ${(props) =>
    props.$fill === 'true' ? 'translateX(71%)' : 'none'};
  transition: background-color transform 0.5s ease-in;

  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 2rem;
    height: 2rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 1rem;
    height: 1rem;
  }
`;

const CodePreView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  margin-right: 1rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  border-radius: 50%;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 1rem;
    height: 1rem;
  }
`;

const TitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT_STYLE_V1.text.text_18_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_12_medium}
  }
`;

const Color = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ColorText = styled.div`
  width: 18rem;
  height: 3.6rem;
  margin-bottom: 2rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 1.8rem;
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 9rem;
    height: 2.5rem;
    ${FONT_STYLE_V1.text.text_18_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 7rem;
    height: 2rem;
    ${FONT_STYLE_V1.text.text_14_medium}
  }
`;

const SelectedColor = styled.div<{ $color: ISelectedColor }>`
  width: 18rem;
  height: 3.6rem;
  margin-bottom: 2rem;
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 1.8rem;
  background-color: ${(props) =>
    `rgba(${props.$color.r}, ${props.$color.g}, ${props.$color.b}, ${props.$color.a})`};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 9rem;
    height: 2.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 7rem;
    height: 2rem;
  }
`;

const ColorPicker = styled.div`
  position: absolute;
  top: 3.8rem;
  left: 19.5rem;
  z-index: 999;
  > div {
    width: 18.2rem !important;
    border-radius: 1.8rem !important;
    background-color: ${PALLETTE_MAIN.sub_main} !important;
    overflow: hidden;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    top: 2.7rem;
    left: 10.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    top: 2.2rem;
    left: 8.5rem;
  }
`;

const SizeInput = styled.input`
  width: 18rem;
  height: 3.6rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: transparent;
  color: ${PALLETTE_MAIN.sub_main};
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 1.8rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 9rem;
    height: 2.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 7rem;
    height: 2rem;
  }
`;

const IconsList = styled.div`
  width: 90%;
  max-width: 192rem;
  padding-top: 10rem;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2rem;
  border-top: 2px solid ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: 1004px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IconListItem = styled.div`
  width: 11rem;
  height: 15rem;
  padding-top: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const IconListItemIcon = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconText = styled.div`
  margin-top: 5rem;
  ${FONT_STYLE_V1.text.text_18_medium}
  font-weight: 400;
`;

interface IMainIconList {
  icon: (color: string, size: string) => string;
  name: string;
}

interface ISelectedColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface IHSL {
  a?: number | undefined;
  h: number;
  l: number;
  s: number;
}

interface IColor {
  hex: string;
  hsl: IHSL;
  rgb: ISelectedColor;
}

function Icons() {
  const [selectedData, setSelectedData] = useState<IMainIconList>(data[0]);
  const [selectedColor, setSelectedColor] = useState<ISelectedColor>({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  });
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [hexColor, setHexColor] = useState('#000000');
  const [isFill, setIsFill] = useState('false');
  const [sizeInput, setSizeInput] = useState('40');

  const IconClickHandler = (name: string) => {
    setSelectedData(data[data.map((el) => el.name).indexOf(name)]);
  };

  const rgbaToHexA = ({ r, g, b, a = 1 }: ISelectedColor) => {
    const hexArr = [
      r.toString(16),
      g.toString(16),
      b.toString(16),
      Math.round(a * 255).toString(16),
    ];
    const mapHexArr = hexArr.map((el) => {
      if (el.length === 1) {
        return `0${el}`;
      }
      return el;
    });

    setHexColor(`#${mapHexArr.join('')}`);
  };

  const onChangeCompleteHandler = (color: IColor) => {
    setSelectedColor(color.rgb);
    rgbaToHexA(color.rgb);
  };

  const displayColorPickerHandler = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const isFillClickHandler = () => {
    if (isFill === 'true') {
      setIsFill('false');
    } else if (isFill === 'false') {
      setIsFill('true');
    }
  };

  const sizeInputChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      setSizeInput(e.target.value);
    } else if (e.target.value === '') {
      setSizeInput(e.target.value);
    } else {
      alert('숫자를 입력하세요');
    }
  };

  return (
    <Wrapper>
      <PreView>
        <IconPreView>
          <ZoomIcon
            dangerouslySetInnerHTML={{
              __html: selectedData.icon(hexColor, '370'),
            }}
            $fill={isFill}
          />
          <IconBackgroundToggle onClick={isFillClickHandler} $fill={isFill}>
            {isFill === 'true' ? 'Fill' : null}
            <IconBackgroundToggleDot $fill={isFill} />
            {isFill === 'true' ? null : 'Empty'}
          </IconBackgroundToggle>
        </IconPreView>
        <CodePreView>
          <Title>
            <TitleDot />
            <TitleText>{`icon > ${selectedData.name} icon`}</TitleText>
          </Title>
          <Color>
            <ColorText>size</ColorText>
            <SizeInput value={sizeInput} onChange={sizeInputChangeHadler} />
          </Color>
          <Color>
            <ColorText>color</ColorText>
            <SelectedColor
              $color={selectedColor}
              onClick={displayColorPickerHandler}
            />
            {/* react color 추가 */}
            {displayColorPicker ? (
              <ColorPicker>
                <ChromePicker
                  color={selectedColor}
                  onChangeComplete={onChangeCompleteHandler}
                />
              </ColorPicker>
            ) : null}
          </Color>

          {/* react code block 추가 */}
          <CodeBlock
            titles={['React', 'SVG']}
            codes={[
              `import { ${selectedData.name} } from 'for-loop-icons'
            
<${selectedData.name} size={${sizeInput}} color={${hexColor}}>
            `,
              selectedData.icon(hexColor, '370'),
            ]}
          />
        </CodePreView>
      </PreView>
      <IconsList>
        {data.map((el) => (
          <IconListItem key={el.name} onClick={() => IconClickHandler(el.name)}>
            <IconListItemIcon
              dangerouslySetInnerHTML={{
                __html: el.icon(PALLETTE_MAIN.sub_main, '40'),
              }}
            />
            <IconText>{el.name}</IconText>
          </IconListItem>
        ))}
      </IconsList>
    </Wrapper>
  );
}

export default Icons;
