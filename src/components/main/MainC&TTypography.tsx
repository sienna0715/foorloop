import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MainColorTypographyTypographyTitle from './MainC&TTypographyTitle';

import MainColorTypographyTypographyT from './MainC&TTypographyT';
import MainColorTypographyTypographyF from './MainC&TTypographyF';
import MainColorTypographyTypographyL from './MainC&TTypographyL';
import {
  BREAKPOINTDESKTOP,
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
} from '../../breakpoint';

const Container = styled.div`
  width: 68rem;
  margin-right: 7rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    height: 53.2rem;
    margin-right: 0;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 35rem;
    height: 30.8rem;
    margin-right: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 28rem;
    height: 13.5rem;
    margin-right: 0;
  }
`;

const Tab = styled.div`
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
      <Tab>
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
      </Tab>
      <Item>{data[page]}</Item>
    </Container>
  );
}

export default MainColorTypographyTypography;
