import { useState } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { PALETTE_COMPONENT } from '../styles/colors';
import CodeBlock from '../components/CodeBlock';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import data from '../data/iconData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16.5rem;
  margin-bottom: 18rem;
`;

const PreView = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    props.$fill === 'true'
      ? PALETTE_COMPONENT.primary_black
      : PALETTE_COMPONENT.primary_beige};
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 50%;
`;

const IconBackgroundToggle = styled.div<{ $fill: string }>`
  position: absolute;
  width: 12rem;
  height: 5rem;
  padding: ${(props) =>
    props.$fill === 'true' ? `0 0.75rem 0 2rem` : `0 0.75rem`};
  display: flex;
  align-items: center;
  border: 1px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 2.5rem;
  background-color: ${(props) =>
    props.$fill === 'true'
      ? PALETTE_COMPONENT.primary_beige
      : PALETTE_COMPONENT.primary_black};
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${(props) =>
    props.$fill === 'true'
      ? PALETTE_COMPONENT.primary_black
      : PALETTE_COMPONENT.primary_beige};
  transition: background-color 0.5s ease-in;
`;

const IconBackgroundToggleDot = styled.div<{ $fill: string }>`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: ${(props) => (props.$fill === 'true' ? null : '0.4rem')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.$fill === 'true'
      ? PALETTE_COMPONENT.primary_black
      : PALETTE_COMPONENT.primary_beige};
  transform: ${(props) =>
    props.$fill === 'true' ? 'translateX(71%)' : 'none'};
  transition: background-color transform 0.5s ease-in;
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
  margin-right: 2rem;
  background-color: ${PALETTE_COMPONENT.primary_beige};
  border-radius: 50%;
`;
const TitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT_STYLE_V1.text.text_18_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
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
  margin-bottom: 5rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 1.8rem;
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;
const SelectedColor = styled.div<{ $color: ISelectedColor }>`
  width: 18rem;
  height: 3.6rem;
  margin-bottom: 5rem;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 1.8rem;
  background-color: ${(props) =>
    `rgba(${props.$color.r}, ${props.$color.g}, ${props.$color.b}, ${props.$color.a})`};
`;
const ColorPicker = styled.div`
  position: absolute;
  top: 3.8rem;
  left: 19.5rem;
  z-index: 999;
  > div {
    width: 18.2rem !important;
    border-radius: 1.8rem !important;
    background-color: ${PALETTE_COMPONENT.primary_beige} !important;
    overflow: hidden;
  }
`;
const IconsList = styled.div`
  width: 100%;
  padding-top: 18rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  border-top: 2px solid ${PALETTE_COMPONENT.primary_beige};
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
  icon: (color: string, size: number) => string;
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

  return (
    <Wrapper>
      <PreView>
        <IconPreView>
          <ZoomIcon
            dangerouslySetInnerHTML={{
              __html: selectedData.icon(hexColor, 370),
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
          {/* react code block 추기 */}
          <CodeBlock
            titles={['React', 'SVG']}
            codes={['react code', selectedData.icon(hexColor, 370)]}
          />
        </CodePreView>
      </PreView>
      <IconsList>
        {data.map((el) => (
          <IconListItem key={el.name} onClick={() => IconClickHandler(el.name)}>
            <IconListItemIcon
              dangerouslySetInnerHTML={{
                __html: el.icon(PALETTE_COMPONENT.primary_beige, 40),
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
