import React, { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import Delete from '../../assets/input-delete.png';
import Alert from '../../assets/input-alert.png';
import Check from '../../assets/input-check.png';

const InputForm = styled.form`
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 4px;
  .success {
    border: 1px solid ${PALETTE_COMPONENT.primary_blue};
  }
  .error {
    border: 1px solid ${PALETTE_COMPONENT.primary_red};
  }
`;
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
const DeleteBtn = styled.img`
  padding-right: 0.5rem;
`;
const ResultImg = styled.img``;

export default function InputCheck() {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [check, isCheck] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (count > 8) {
      isCheck(true);
    }
  };

  return (
    <InputForm onChange={handleSubmit}>
      {count === 0 ? (
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
            <DeleteBtn src={Delete} onClick={() => setValue('')} />
          )}
        </InputWrap>
      ) : check ? (
        <InputWrap className="success">
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
            <DeleteBtn src={Delete} onClick={() => setValue('')} />
          )}
          <ResultImg src={Check} onClick={() => setValue('')} />
        </InputWrap>
      ) : (
        <InputWrap className="error">
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
            <DeleteBtn src={Delete} onClick={() => setValue('')} />
          )}
          <ResultImg src={Alert} onClick={() => setValue('')} />
        </InputWrap>
      )}
    </InputForm>
  );
}
