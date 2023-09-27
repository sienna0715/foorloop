import styled from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../../breakpoint';
// images
import inputComponents from '../../assets/images/input-min.png';
import checkboxComponents from '../../assets/images/checkbox-min.png';
import buttonComponents from '../../assets/images/button-min.png';

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
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
  }
`;
const ComponentsBottomRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 7rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    justify-content: center;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
  }
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
  text-indent: -9999rem;
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
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 21.6rem;
    height: 21.6rem;
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
  text-indent: -9999rem;
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
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 9rem;
    height: 9rem;
    border-radius: 2rem;
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
  text-indent: -9999rem;
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
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 9rem;
    height: 9rem;
    border-radius: 2rem;
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
  setCurrentItem: (state: string) => void;
}

function ComponentsBottom({ setCurrentItem }: IComponentsBottomProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentItem(e.currentTarget.innerText);
  };

  return (
    <ComponentsBottomWrap>
      <ComponentsBottomContainer>
        <Title>Input</Title>
        <ComponentsBottomRow>
          <ComponentBigBox onClick={handleClick}>
            0
            <InputImg className="input_default" />
          </ComponentBigBox>
          <ComponentBigBox onClick={handleClick}>
            1
            <InputImg className="input_count" />
          </ComponentBigBox>
          <ComponentBigBox onClick={handleClick}>
            2
            <InputImg className="input_check" />
          </ComponentBigBox>
        </ComponentsBottomRow>
        <Title>Dropdown & Search</Title>
        <ComponentsBottomRow>
          <ComponentBigBox onClick={handleClick}>
            3
            <InputImg className="dropdown_default" />
          </ComponentBigBox>
          <ComponentBigBox onClick={handleClick}>
            4
            <InputImg className="search_bar" />
          </ComponentBigBox>
        </ComponentsBottomRow>
        <Title>Checkbox</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            5
            <CheckboxImg className="checkbox_beige" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            6
            <CheckboxImg className="round_checkbox_beige" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            7
            <CheckboxImg className="checkbox_beige_label" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            8
            <CheckboxImg className="round_checkbox_beige_label" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            9
            <CheckboxImg className="checkbox_red" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            10
            <CheckboxImg className="round_checkbox_red" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            11
            <CheckboxImg className="checkbox_red_label" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            12
            <CheckboxImg className="round_checkbox_red_label" />
          </ComponentBox>
          <ComponentFilledBox onClick={handleClick}>
            13
            <CheckboxImg className="checkbox_black" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            14
            <CheckboxImg className="round_checkbox_black" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            15
            <CheckboxImg className="chceckbox_black_label" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            16
            <CheckboxImg className="round_checkbox_black_label" />
          </ComponentFilledBox>
        </ComponentsBottomRow>
        <Title>Button</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            17
            <ButtonImg className="button_default" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            18
            <ButtonImg className="button_plus_left" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            19
            <ButtonImg className="button_plus_right" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            20
            <ButtonImg className="button_outline" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            21
            <ButtonImg className="button_outline_plus_left" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            22
            <ButtonImg className="button_outline_plus_right" />
          </ComponentBox>
          <ComponentFilledBox onClick={handleClick}>
            23
            <ButtonImg className="button_outline_filled" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            24
            <ButtonImg className="button_outline_filled_plus_left" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            25
            <ButtonImg className="button_outline_filled_plus_right" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            26
            <ButtonImg className="button_default_dark" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            27
            <ButtonImg className="button_plus_left_dark" />
          </ComponentFilledBox>
          <ComponentFilledBox onClick={handleClick}>
            28
            <ButtonImg className="button_plus_right_dark" />
          </ComponentFilledBox>
        </ComponentsBottomRow>
        <Title>Disable Button</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            29
            <ButtonImg className="button_outline_disable" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            30
            <ButtonImg className="button_disable" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            31
            <ButtonImg className="button_filled_disable" />
          </ComponentBox>
        </ComponentsBottomRow>
        <Title>Toggle</Title>
        <ComponentsBottomRow>
          <ComponentBox onClick={handleClick}>
            32
            <CheckboxImg className="toggle_aos" />
          </ComponentBox>
          <ComponentBox onClick={handleClick}>
            33
            <CheckboxImg className="toggle_ios" />
          </ComponentBox>
        </ComponentsBottomRow>
      </ComponentsBottomContainer>
    </ComponentsBottomWrap>
  );
}

export default ComponentsBottom;
