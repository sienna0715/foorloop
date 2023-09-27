import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';

interface IMainColorTypographyTypographyTitleProps {
  value: string;
  selectTitle: string;
  setSelectTitle: (a: string) => void;
}

const Container = styled.div<{ isselect: string }>`
  ${FONT_STYLE_V1.text.text_30_medium}
  font-size: 2rem;
  font-weight: ${(props) => (props.isselect === 'true' ? 900 : 400)};
  text-align: center;
  color: ${(props) =>
    props.isselect === 'true' ? PALLETTE_MAIN.sub_main : PALLETTE_MAIN.gray};
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_14_medium}
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_10_medium}
  }
`;

function MainColorTypographyTypographyTitle({
  value,
  selectTitle,
  setSelectTitle,
}: IMainColorTypographyTypographyTitleProps) {
  const [isSelect, setIsSelect] = useState('false');

  useEffect(() => {
    if (value === selectTitle) {
      setIsSelect('true');
    } else {
      setIsSelect('false');
    }
  }, [value, selectTitle]);

  const titleClickHandler = () => {
    setSelectTitle(value);
  };

  return (
    <Container onClick={titleClickHandler} isselect={isSelect}>
      {value}
    </Container>
  );
}

export default MainColorTypographyTypographyTitle;
