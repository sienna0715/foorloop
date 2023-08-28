import { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import Delete from '../../assets/input-delete.png';

const InputWrap = styled.div`
  width: 400px;
  height: 60px;
  padding: 0.8rem;
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
`;
const InputContainer = styled.div`
  width: 350px;
  padding-right: 10px;
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
  width: 100%;
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const DeleteBtn = styled.img``;

export default function InputDefault() {
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
          // onBlur={() => setIsFocus(false)}
          onChange={handleChange}
        />
      </InputContainer>
      {isFocus && count !== 0 && (
        <DeleteBtn src={Delete} onClick={() => setValue('')} />
      )}
    </InputWrap>
  );
}
