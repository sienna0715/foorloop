import styled from 'styled-components';
// components
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../../breakpoint';
import MainIconSideListContent from './MainIconSideListContent';

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

interface IMainIconList {
  icon: (color: string, size: string) => string;
  name: string;
}

interface IMainIconSideListProps {
  prevDatas: IMainIconList[];
  nextDatas: IMainIconList[];
  data: IMainIconList[];
  sideItemClickHandler: (a: string) => void;
}

function MainIconSideList({
  prevDatas,
  nextDatas,
  data,
  sideItemClickHandler,
}: IMainIconSideListProps) {
  return (
    <SideList>
      <SideListContent>
        <MainIconSideListContent
          datas={prevDatas}
          iconsData={data}
          sideItemClickHandler={sideItemClickHandler}
        />
      </SideListContent>
      <LeftSideListContent>
        <MainIconSideListContent
          datas={nextDatas}
          iconsData={data}
          sideItemClickHandler={sideItemClickHandler}
        />
      </LeftSideListContent>
    </SideList>
  );
}

export default MainIconSideList;
