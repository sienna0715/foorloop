import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../../styles/colors';
import data from '../../../data/iconData';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../../breakpoint';
import { FONT_STYLE_V1 } from '../../../styles/fontStyles';
import MainIconSideList from './MainIconSideList';
import MainIconSelectIcon from './MainIconSelectIcon';
import MainIconArrowButton from './MainIconArrowButton';

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  margin-bottom: 70rem;
  ${FONT_STYLE_V1.text.text_100_medium}
  font-weight: 400;
  line-height: 4rem;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-bottom: 55rem;
    font-size: 6rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-bottom: 35rem;
    font-size: 3rem;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IMainIconList {
  icon: (color: string, size: string) => string;
  name: string;
}

function MainIconList() {
  const [page, setPage] = useState<number>(0);
  const [prevDatas, setPrevDatas] = useState<IMainIconList[]>([]);
  const [selectDatas, setSelectDatas] = useState<IMainIconList>(data[0]);
  const [nextDatas, setNextDatas] = useState<IMainIconList[]>([]);

  useEffect(() => {
    if (page < 4) {
      const pre = data.slice(page - 4);

      if (pre.length < 4) {
        pre.push(...data.slice(0, 4 - pre.length));
      }

      setPrevDatas(pre);
    } else {
      const pre = data.slice(page - 4, page);

      if (pre.length < 4) {
        pre.push(...data.slice(0, 4 - pre.length));
      }

      setPrevDatas(pre);
    }

    setSelectDatas(data[page]);

    const next = data.slice(page + 1, page + 5);

    if (next.length < 4) {
      next.push(...data.slice(0, 4 - next.length));
    }

    setNextDatas(next);
  }, [page]);

  const rightArrowButtonHandler = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const leftArrowButtonHandler = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const sideItemClickHandler = (name: string) => {
    setPage(data.map((el) => el.name).indexOf(name));
  };

  return (
    <Container>
      <Title>ICON</Title>
      <ListContainer>
        <MainIconSideList
          prevDatas={prevDatas}
          nextDatas={nextDatas}
          data={data}
          sideItemClickHandler={sideItemClickHandler}
        />
        <MainIconArrowButton
          rightArrowButtonHandler={rightArrowButtonHandler}
          leftArrowButtonHandler={leftArrowButtonHandler}
        />
        <MainIconSelectIcon selectDatas={selectDatas} />
      </ListContainer>
    </Container>
  );
}

export default MainIconList;
