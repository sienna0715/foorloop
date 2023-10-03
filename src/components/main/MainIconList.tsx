import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PALLETTE_MAIN } from '../../styles/colors';
import data from '../../data/iconData';
import ArrowButton from '../ArrowButton';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../breakpoint';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

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

const SideList = styled.div`
  position: absolute;
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    gap: 45rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    gap: 22rem;
  }
`;

const SideListContent = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    gap: 4rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    gap: 2rem;
  }
`;

const LeftSideListContent = styled(SideListContent)`
  justify-content: flex-start;
`;

const SideListContentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    gap: 0.5rem;
  }
`;

const SideListContentItemIcon = styled.div`
  width: 16rem;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 50%;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 8rem;
    height: 8rem;
    > svg {
      width: 2.7rem;
      height: 2.7rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 4rem;
    height: 4rem;
    > svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;

const SideListContentItemText = styled.div`
  height: 3rem;
  ${FONT_STYLE_V1.text.text_24_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 0.6rem;
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    gap: 25rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    gap: 12rem;
  }
`;

const SelectIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectIconImg = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${PALLETTE_MAIN.sub_main};

  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 20rem;
    height: 20rem;
    > svg {
      width: 7rem;
      height: 7rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 10rem;
    height: 10rem;
    > svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

const SelectIconText = styled.div`
  position: absolute;
  height: 67.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  ${FONT_STYLE_V1.text.text_50_medium}
  font-weight: 400;
  color: ${PALLETTE_MAIN.sub_main};

  > div {
    padding: 2rem 5rem;
    background-color: ${PALLETTE_MAIN.main};
  }

  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    height: 33.8rem;
    font-size: 3rem;
    > div {
      padding: 1rem 2.5rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    height: 16.9rem;
    font-size: 1.5rem;
    > div {
      padding: 0.5rem 1.25rem;
    }
  }
`;

const ArrowButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(0.5turn);
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const LeftArrowButtonBorder = styled(ArrowButtonBorder)`
  transform: none;
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
        <SideList>
          <SideListContent>
            {prevDatas.map((prevData) => (
              <SideListContentItem
                key={data.map((el) => el.name).indexOf(prevData.name)}
                onClick={() => sideItemClickHandler(prevData.name)}
              >
                <SideListContentItemIcon
                  dangerouslySetInnerHTML={{
                    __html: prevData.icon(PALLETTE_MAIN.sub_main, '55'),
                  }}
                />
                <SideListContentItemText>
                  {prevData.name}
                </SideListContentItemText>
              </SideListContentItem>
            ))}
          </SideListContent>
          <LeftSideListContent>
            {nextDatas.map((nextData) => (
              <SideListContentItem
                key={data.map((el) => el.name).indexOf(nextData.name)}
                onClick={() => sideItemClickHandler(nextData.name)}
              >
                <SideListContentItemIcon
                  dangerouslySetInnerHTML={{
                    __html: nextData.icon(PALLETTE_MAIN.sub_main, '55'),
                  }}
                />
                <SideListContentItemText>
                  {nextData.name}
                </SideListContentItemText>
              </SideListContentItem>
            ))}
          </LeftSideListContent>
        </SideList>
        <ArrowButtonContainer>
          <ArrowButtonBorder onClick={rightArrowButtonHandler}>
            <ArrowButton />
          </ArrowButtonBorder>
          <LeftArrowButtonBorder onClick={leftArrowButtonHandler}>
            <ArrowButton />
          </LeftArrowButtonBorder>
        </ArrowButtonContainer>
        <SelectIcon>
          <SelectIconImg
            dangerouslySetInnerHTML={{
              __html: selectDatas.icon(PALLETTE_MAIN.main, '140'),
            }}
          />
          <SelectIconText>
            <div>{selectDatas.name}</div>
          </SelectIconText>
        </SelectIcon>
      </ListContainer>
    </Container>
  );
}

export default MainIconList;
