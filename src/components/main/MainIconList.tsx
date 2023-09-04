import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import arrowB from '../../asset/arrow.svg';
import data from '../../data/iconData';

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
  margin-bottom: 43rem;
  font-size: 6.25rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideList = styled.div`
  position: absolute;
  width: 100%;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56.25rem;
`;

const SideListContent = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;
`;

const LeftSideListContent = styled(SideListContent)`
  justify-content: flex-start;
`;

const SideListContentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;

const SideListContentItemIcon = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 50%;
`;

const SideListContentItemText = styled.div`
  height: 1.875rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const ArrowButton = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32.5rem;
`;

const SelectIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectIconImg = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${PALETTE_COMPONENT.primary_beige};
`;

const SelectIconText = styled.div`
  position: absolute;
  height: 42.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  font-size: 3.125rem;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};

  > div {
    padding: 1.25rem 3.125rem;
    background-color: ${PALETTE_COMPONENT.primary_black};
  }
`;

const ArrowButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftArrowButtonBorder = styled(ArrowButtonBorder)`
  transform: rotate(0.5turn);
`;

interface IMainIconList {
  icon: (color: string, size: number) => string;
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

  return (
    <Container>
      <Title>ICON</Title>
      <ListContainer>
        <SideList>
          <SideListContent>
            {prevDatas.map((prevData) => (
              <SideListContentItem>
                <SideListContentItemIcon
                  dangerouslySetInnerHTML={{
                    __html: prevData.icon(PALETTE_COMPONENT.primary_beige, 55),
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
              <SideListContentItem>
                <SideListContentItemIcon
                  dangerouslySetInnerHTML={{
                    __html: nextData.icon(PALETTE_COMPONENT.primary_beige, 55),
                  }}
                />
                <SideListContentItemText>
                  {nextData.name}
                </SideListContentItemText>
              </SideListContentItem>
            ))}
          </LeftSideListContent>
        </SideList>
        <ArrowButton>
          <ArrowButtonBorder onClick={rightArrowButtonHandler}>
            <img src={arrowB} alt="right arrowButton" />
          </ArrowButtonBorder>
          <LeftArrowButtonBorder onClick={leftArrowButtonHandler}>
            <img src={arrowB} alt="left arrowButton" />
          </LeftArrowButtonBorder>
        </ArrowButton>
        <SelectIcon>
          <SelectIconImg
            dangerouslySetInnerHTML={{
              __html: selectDatas.icon(PALETTE_COMPONENT.primary_black, 140),
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
