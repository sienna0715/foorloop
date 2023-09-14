import { useState } from 'react';
import { styled } from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import Check from '../../assets/checkbox-beige.svg';

const CheckboxWrap = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${PALETTE_COMPONENT.primary_black};
  border-radius: 2px;
`;
const CheckboxFill = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${PALETTE_COMPONENT.primary_black};
  border: 1px solid ${PALETTE_COMPONENT.primary_black};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckIcon = styled.img``;

export default function CheckboxBlack() {
  const [check, isCheck] = useState(false);

  return (
    <CheckboxWrap onClick={() => isCheck(!check)}>
      {check ? (
        <CheckboxFill>
          <CheckIcon src={Check} />
        </CheckboxFill>
      ) : (
        <Checkbox />
      )}
    </CheckboxWrap>
  );
}
