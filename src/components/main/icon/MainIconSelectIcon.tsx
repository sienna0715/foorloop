import styled from 'styled-components';
// components
import { FONT_STYLE_V1 } from '../../../styles/fontStyles';
import { PALLETTE_MAIN } from '../../../styles/colors';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../../breakpoint';

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

interface IMainIconList {
  icon: (color: string, size: string) => string;
  name: string;
}

interface IMainIconSelectIconProps {
  selectDatas: IMainIconList;
}

function MainIconSelectIcon({ selectDatas }: IMainIconSelectIconProps) {
  return (
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
  );
}

export default MainIconSelectIcon;
