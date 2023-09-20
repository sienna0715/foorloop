import React, { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import DeleteIcon from '../../assets/input-delete.svg';
import AlertIcon from '../../assets/input-alert.svg';
import CheckIcon from '../../assets/input-check.svg';

const InputForm = styled.form`
  border-radius: 4px;
  .success {
    border: 1px solid ${PALETTE_COMPONENT.primary_blue};
  }
  .error {
    border: 1px solid ${PALETTE_COMPONENT.primary_red};
  }
`;
const InputWrap = styled.div<{ width: number }>`
  width: ${(props) => (props.width ? props.width : 400)}px;
  height: 60px;
  padding: 0.8rem;
  border: 1px solid ${PALETTE_COMPONENT.primary_black};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const Input = styled.input<{ color: string }>`
  ${FONT_STYLE_V1.text.text_18_medium};
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : 'black')};
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const DeleteBtn = styled.img`
  padding-right: 0.5rem;
  cursor: pointer;
`;
const ResultIcon = styled.img`
  width: 16px;
  height: 16px;
`;

interface IInputCheckProps {
  width: number;
  color: string;
}

export default function InputCheckIcon({
  width = 400,
  color = 'black',
}: IInputCheckProps) {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [checkIcon, isCheckIcon] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCheck = () => {
    if (count > 8) {
      isCheckIcon(true);
    } else {
      isCheckIcon(false);
    }
  };

  return (
    <InputForm onChange={handleCheck}>
      {count === 0 ? (
        <InputWrap width={width}>
          <InputContainer>
            <Label>아이디</Label>
            <Input
              type="text"
              value={value}
              onFocus={() => setIsFocus(true)}
              onChange={handleChange}
              color={color}
            />
          </InputContainer>
          {isFocus && count !== 0 && (
            <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
          )}
        </InputWrap>
      ) : (
        <InputWrap width={width} className={checkIcon ? 'success' : 'error'}>
          <InputContainer>
            <Label>아이디</Label>
            <Input
              type="text"
              placeholder="id"
              value={value}
              onFocus={() => setIsFocus(true)}
              onChange={handleChange}
              color={color}
            />
          </InputContainer>
          {isFocus && count !== 0 && (
            <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
          )}
          <ResultIcon
            src={checkIcon ? CheckIcon : AlertIcon}
            onClick={() => setValue('')}
          />
        </InputWrap>
      )}
    </InputForm>
  );
}
