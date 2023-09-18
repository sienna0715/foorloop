import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
// data
import datas from '../../data/componentsData';

const ComponentsBottomWrap = styled.div`
  width: 100%;
  padding-top: 10rem;
`;
const ComponentsBottomRow = styled.div`
  width: 135rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 7rem;
`;
const Title = styled.div`
  ${FONT_STYLE_V1.text.text_20_medium}
  padding-bottom: 4rem;
`;
const ComponentBigBox = styled.div`
  width: 37rem;
  height: 37rem;
  margin-right: 2rem;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ComponentBox = styled.div`
  width: 20rem;
  height: 20rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ComponentFilledBox = styled.div`
  width: 20rem;
  height: 20rem;
  margin-right: 2rem;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  background-color: ${PALLETTE_MAIN.sub_main};
  border: 1px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// interface IProps {
//   setCurrentItem: (state: string) => void;
// }

function ComponentsBottom() {
  // const handleCilck = (e: React.EventHandler<HTMLDivElement>) => {
  //   setCurrentItem(e.target.value);
  // };
  return (
    <ComponentsBottomWrap>
      <Title>Input</Title>
      <ComponentsBottomRow>
        {datas.inputs.map((item) => (
          <ComponentBigBox key={item.id}>{item.component}</ComponentBigBox>
        ))}
      </ComponentsBottomRow>
      <Title>Dropdown</Title>
      <ComponentsBottomRow>
        {datas.dropdowns.map((item) => (
          <ComponentBigBox key={item.id}>{item.component}</ComponentBigBox>
        ))}
        {datas.searchs.map((item) => (
          <ComponentBigBox key={item.id}>{item.component}</ComponentBigBox>
        ))}
      </ComponentsBottomRow>
      <Title>Toggle</Title>
      <ComponentsBottomRow>
        {datas.toggles.map((item) => (
          <ComponentBox key={item.id}>{item.component}</ComponentBox>
        ))}
      </ComponentsBottomRow>
      <Title>Checkbox</Title>
      <ComponentsBottomRow>
        {datas.checkboxs.map((item) => (
          <ComponentBox key={item.id}>{item.component}</ComponentBox>
        ))}
        {datas.darkCheckboxs.map((item) => (
          <ComponentFilledBox key={item.id}>
            {item.component}
          </ComponentFilledBox>
        ))}
      </ComponentsBottomRow>
      <Title>Button</Title>
      <ComponentsBottomRow>
        {datas.buttons.map((item) => (
          <ComponentBox key={item.id}>{item.component}</ComponentBox>
        ))}
        {datas.darkButtons.map((item) => (
          <ComponentFilledBox key={item.id}>
            {item.component}
          </ComponentFilledBox>
        ))}
      </ComponentsBottomRow>
    </ComponentsBottomWrap>
  );
}

export default ComponentsBottom;
