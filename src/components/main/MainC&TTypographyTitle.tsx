import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';

interface IMainColorTypographyTypographyTitleProps {
  value: string;
  selectTitle: string;
  setSelectTitle: (a: string) => void;
}

const Container = styled.div<{ isselect: string }>`
  font-size: 1.25rem;
  font-weight: ${(props) => (props.isselect === 'true' ? 900 : 400)};
  color: ${(props) =>
    props.isselect === 'true'
      ? PALETTE_COMPONENT.primary_beige
      : PALETTE_COMPONENT.gray04};
  cursor: pointer;
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
