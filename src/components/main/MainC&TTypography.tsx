import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MainColorTypographyTypographyTitle from './MainC&TTypographyTitle';
import MainColorTypographyTypographyF from './MainC&TTypographyF';
import MainColorTypographyTypographyT from './MainC&TTypographyT';
import MainColorTypographyTypographyL from './MainC&TTypographyL';

const Container = styled.div`
  width: 680px;
  margin-right: 4.375rem;
  display: flex;
  flex-direction: column;
`;

const Tap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MainColorTypographyTypography() {
  const [selectTitle, setSelectTitle] = useState('TYPOGRAPHY');
  const [page, setPage] = useState(0);

  const data = [
    <MainColorTypographyTypographyT />,
    <MainColorTypographyTypographyF />,
    <MainColorTypographyTypographyL />,
  ];

  useEffect(() => {
    if (selectTitle === 'TYPOGRAPHY') {
      setPage(0);
    } else if (selectTitle === 'FONT DETAIL') {
      setPage(1);
    } else if (selectTitle === 'LETTERS + NUMBERS') {
      setPage(2);
    }
  }, [selectTitle]);

  return (
    <Container>
      <Tap>
        <MainColorTypographyTypographyTitle
          value="TYPOGRAPHY"
          selectTitle={selectTitle}
          setSelectTitle={setSelectTitle}
        />
        <MainColorTypographyTypographyTitle
          value="FONT DETAIL"
          selectTitle={selectTitle}
          setSelectTitle={setSelectTitle}
        />
        <MainColorTypographyTypographyTitle
          value="LETTERS + NUMBERS"
          selectTitle={selectTitle}
          setSelectTitle={setSelectTitle}
        />
      </Tap>
      <Item>{data[page]}</Item>
    </Container>
  );
}

export default MainColorTypographyTypography;
