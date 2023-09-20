import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
// images
import inputComponents from '../../assets/images/input.png';
import checkboxComponents from '../../assets/images/checkbox.png';
import buttonComponents from '../../assets/images/button.png';

const ComponentsBottomWrap = styled.div`
  width: 100%;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
`;
const ComponentsBottomContainer = styled.div`
  width: 132rem;
  display: flex;
  flex-direction: column;
`;
const ComponentsBottomRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 7rem;
`;
const Title = styled.div`
  ${FONT_STYLE_V1.text.text_20_medium}
  padding-bottom: 4rem;
`;
const ComponentBigBox = styled.div`
  /* overflow: hidden; */
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
  text-indent: -99rem;
  cursor: pointer;
  .input_default {
    background-position-y: -40.5rem;
  }
  .input_count {
    background-position-y: -19rem;
  }
  .input_check {
    background-position-y: -40.5rem;
  }
  .dropdown_default {
    background-position-y: -58.5rem;
  }
  .search_bar {
    background-position-y: -78rem;
  }
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
  text-indent: -999rem;
  cursor: pointer;
  .button_default {
    background-position-y: 0rem;
  }
  .button_plus_left {
    background-position-y: -14.7rem;
  }
  .button_plus_right {
    background-position-y: -29.5rem;
  }
  .button_outline {
    background-position-y: -44rem;
  }
  .button_outline_plus_left {
    background-position-y: -59rem;
  }
  .button_outline_plus_right {
    background-position-y: -74rem;
  }
  .button_outline_disable {
    background-position-y: -177.7rem;
  }
  .button_disable {
    background-position-y: -192.6rem;
  }
  .button_filled_disable {
    background-position-y: -207.4rem;
  }
  .checkbox_beige {
    background-position-y: 0rem;
  }
  .round_checkbox_beige {
    background-position-y: -7.4rem;
  }
  .checkbox_beige_label {
    background-position-y: -15.2rem;
  }
  .round_checkbox_beige_label {
    background-position-y: -23rem;
  }
  .checkbox_red {
    background-position-y: -31rem;
  }
  .round_checkbox_red {
    background-position-y: -38.5rem;
  }
  .checkbox_red_label {
    background-position-y: -46.5rem;
  }
  .round_checkbox_red_label {
    background-position-y: -54rem;
  }
  .toggle_aos {
    background-position-y: -96rem;
  }
  .toggle_ios {
    background-position-y: -106.2rem;
  }
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
  text-indent: -999rem;
  cursor: pointer;
  .button_outline_filled {
    background-position-y: -88.6rem;
  }
  .button_outline_filled_plus_left {
    background-position-y: -103.4rem;
  }
  .button_outline_filled_plus_right {
    background-position-y: -118.2rem;
  }
  .button_default_dark {
    background-position-y: -133rem;
  }
  .button_plus_left_dark {
    background-position-y: -148rem;
  }
  .button_plus_right_dark {
    background-position-y: -163rem;
  }
  .checkbox_black {
    background-position-y: -62rem;
  }
  .round_checkbox_black {
    background-position-y: -69.6rem;
  }
  .chceckbox_black_label {
    background-position-y: -77.5rem;
  }
  .round_checkbox_black_label {
    background-position-y: -85.2rem;
  }
`;
const InputImg = styled.div`
  width: 30rem;
  height: 7rem;
  background-image: url('${inputComponents}');
  background-size: cover;
`;
const ButtonImg = styled.div`
  width: 12rem;
  height: 5rem;
  background-image: url('${buttonComponents}');
  background-size: cover;
`;
const CheckboxImg = styled.div`
  width: 10rem;
  height: 3.5rem;
  background-image: url('${checkboxComponents}');
  background-size: cover;
`;

interface IComponentsBottomProps {
  setCurrentItem: (state: string | null) => void;
}

function ComponentsBottom({ setCurrentItem }: IComponentsBottomProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentItem(e.currentTarget.textContent);
  };

  return (
    <ComponentsBottomWrap>
      <ComponentsBottomContainer>
        <Title>Input</Title>
        <ComponentsBottomRow>
          <ComponentBigBox onClick={handleClick}>
            input_default
            <InputImg className="input_default" />
          </ComponentBigBox>
          <ComponentBigBox onClick={handleClick}>
            input_count
            <InputImg className="input_count" />
          </ComponentBigBox>
          <ComponentBigBox onClick={handleClick}>
            input_check
            <InputImg className="input_check" />
          </ComponentBigBox>
        </ComponentsBottomRow>
        <Title>Dropdown</Title>
        <ComponentsBottomRow>
          <ComponentBigBox onClick={handleClick}>
            dropdown_default
            <InputImg className="dropdown_default" />
          </ComponentBigBox>
          <ComponentBigBox onClick={handleClick}>
            search_bar
            <InputImg className="search_bar" />
          </ComponentBigBox>
        </ComponentsBottomRow>
        <Title>Checkbox</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            checkbox_beige
            <CheckboxImg className="checkbox_beige" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            round_checkbox_beige
            <CheckboxImg className="round_checkbox_beige" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            checkbox_beige_label
            <CheckboxImg className="checkbox_beige_label" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            round_checkbox_beige_label
            <CheckboxImg className="round_checkbox_beige_label" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            checkbox_red
            <CheckboxImg className="checkbox_red" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            round_checkbox_red
            <CheckboxImg className="round_checkbox_red" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            checkbox_red_label
            <CheckboxImg className="checkbox_red_label" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            round_checkbox_red_label
            <CheckboxImg className="round_checkbox_red_label" />
          </ComponentBox>
          <ComponentFilledBox onClick={handleClick}>
            checkbox_black
            <CheckboxImg className="checkbox_black" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            round_checkbox_black
            <CheckboxImg className="round_checkbox_black" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            chceckbox_black_label
            <CheckboxImg className="chceckbox_black_label" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            round_checkbox_black_label
            <CheckboxImg className="round_checkbox_black_label" />
          </ComponentFilledBox>
        </ComponentsBottomRow>
        <Title>Button</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            button_default
            <ButtonImg className="button_default" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_plus_left
            <ButtonImg className="button_plus_left" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_plus_right
            <ButtonImg className="button_plus_right" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_outline
            <ButtonImg className="button_outline" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_outline_plus_left
            <ButtonImg className="button_outline_plus_left" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_outline_plus_right
            <ButtonImg className="button_outline_plus_right" />
          </ComponentBox>
          <ComponentFilledBox onClick={handleClick}>
            button_outline_filled
            <ButtonImg className="button_outline_filled" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            button_outline_filled_plus_left
            <ButtonImg className="button_outline_filled_plus_left" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            button_outline_filled_plus_right
            <ButtonImg className="button_outline_filled_plus_right" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            button_default_dark
            <ButtonImg className="button_default_dark" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            button_plus_left_dark
            <ButtonImg className="button_plus_left_dark" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            button_plus_right_dark
            <ButtonImg className="button_plus_right_dark" />
          </ComponentFilledBox>
        </ComponentsBottomRow>
        <Title>Disable Button</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            button_outline_disable
            <ButtonImg className="button_outline_disable" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_disable
            <ButtonImg className="button_disable" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            button_filled_disable
            <ButtonImg className="button_filled_disable" />
          </ComponentBox>
        </ComponentsBottomRow>
        <Title>Toggle</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            toggle_aos
            <CheckboxImg className="toggle_aos" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            toggle_ios
            <CheckboxImg className="toggle_ios" />
          </ComponentBox>
        </ComponentsBottomRow>
      </ComponentsBottomContainer>
    </ComponentsBottomWrap>
  );
}

export default ComponentsBottom;
