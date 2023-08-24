import { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const InputWrap = styled.div`
  width: 400px;
  height: 60px;
  padding: 0.8rem;
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Label = styled.label`
  ${FONT_STYLE_V1.text.text_8_medium};
  color: ${PALETTE_COMPONENT.gray04};
  padding-bottom: 0.3rem;
`;
const Input = styled.input`
  ${FONT_STYLE_V1.text.text_10_medium};
  outline: none;
  border: none;
  width: 320px;
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const TextLength = styled.span`
  ${FONT_STYLE_V1.text.text_8_medium};
  color: ${PALETTE_COMPONENT.gray04};
  position: absolute;
  top: 70px;
  right: 10px;
`;
const DeleteBtn = styled.button`
  background-color: ${PALETTE_COMPONENT.gray03};
  color: ${PALETTE_COMPONENT.primary_white};
  width: 30px;
  height: 15px;
  font-size: 5px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export default function InputCount() {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputWrap>
      <InputContainer>
        <Label>아이디</Label>
        <Input
          type="text"
          placeholder="id"
          value={value}
          onFocus={() => setIsFocus(true)}
          onChange={handleChange}
        />
      </InputContainer>
      {isFocus && count !== 0 && (
        <DeleteBtn onClick={() => setValue('')}>X</DeleteBtn>
      )}
      <TextLength>{count}/50</TextLength>
    </InputWrap>
  );
}
