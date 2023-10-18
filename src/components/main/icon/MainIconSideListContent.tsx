import styled from 'styled-components';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../../breakpoint';
import { PALLETTE_MAIN } from '../../../styles/colors';
import { FONT_STYLE_V1 } from '../../../styles/fontStyles';

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

interface IMainIconList {
  icon: (color: string, size: string) => string;
  name: string;
}

interface IMainIconSideListContentProps {
  datas: IMainIconList[];
  iconsData: IMainIconList[];
  sideItemClickHandler: (a: string) => void;
}

function MainIconSideListContent({
  datas,
  iconsData,
  sideItemClickHandler,
}: IMainIconSideListContentProps) {
  return (
    <>
      {datas.map((data) => (
        <SideListContentItem
          key={iconsData.map((el) => el.name).indexOf(data.name)}
          onClick={() => sideItemClickHandler(data.name)}
        >
          <SideListContentItemIcon
            dangerouslySetInnerHTML={{
              __html: data.icon(PALLETTE_MAIN.sub_main, '55'),
            }}
          />
          <SideListContentItemText>{data.name}</SideListContentItemText>
        </SideListContentItem>
      ))}
    </>
  );
}

export default MainIconSideListContent;
