import styled from 'styled-components';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Button = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff8e7;
  border-radius: 10px;
  background-color: #ffffff;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${PALETTE_COMPONENT.primary_black};

  &:hover {
    border-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    border-color: #ffd166;
    box-shadow: 0 0 14px #66470020;
  }
`;

function OutLineButton() {
  return <Button type="button">Button</Button>;
}

export default OutLineButton;
