import styled from 'styled-components';
import plus from '../../asset/darkPlus.svg';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Button = styled.button`
  width: 115px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid ${PALETTE_COMPONENT.primary_black};
  border-radius: 10px;
  background-color: #fff8e7;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${PALETTE_COMPONENT.primary_black};
`;

function FilledOutLinePlusButton() {
  return (
    <Button type="button">
      <span>
        <img src={plus} alt="plus" />
      </span>
      <span>Button</span>
    </Button>
  );
}

export default FilledOutLinePlusButton;
