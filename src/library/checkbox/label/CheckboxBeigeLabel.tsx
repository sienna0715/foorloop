import { useState } from 'react';
import { styled } from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../../styles/colors';
import Check from '../../../assets/checkbox-black.png';

const CheckboxWrap = styled.div`
  width: max-content;
  height: 25px;
  .false {
    color: ${PALETTE_COMPONENT.gray04};
  }
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
const Label = styled.label`
  padding-left: 0.5rem;
`;

export default function CheckboxBeigeLabel() {
  const [check, isCheck] = useState(false);

  return (
    <CheckboxWrap onClick={() => isCheck(!check)}>
      {check ? (
        <>
          <CheckboxFill>
            <CheckIcon src={Check} />
          </CheckboxFill>
          <Label>작성하세요</Label>
        </>
      ) : (
        <>
          <Checkbox />
          <Label className="false">작성하세요</Label>
        </>
      )}
    </CheckboxWrap>
  );
}
