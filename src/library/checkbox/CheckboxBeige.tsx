import { useState } from 'react';
import { styled } from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import Check from '../../assets/checkbox-black.png';

const CheckboxWrap = styled.div`
  width: 25px;
  height: 25px;
`;
const Checkbox = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 2px;
`;
const CheckboxFill = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${PALETTE_COMPONENT.primary_beige};
  border: 1px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 2px;
`;
const CheckIcon = styled.img``;

export default function CheckboxBeige() {
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
