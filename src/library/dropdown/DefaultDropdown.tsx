import { styled } from 'styled-components';
import React, { useState } from 'react';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const Container = styled.div`
  width: 300px;
`;

const Result = styled.div<{ isDropdown?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 12px;
  display: flex;
  align-items: center;

  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: ${(props) => (props.isDropdown ? '10px 10px 0 0' : '10px')};

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_black};
`;

const Dropdown = styled.div`
  position: absolute;
  height: 175px;
  width: 300px;
  background-color: ${PALETTE_COMPONENT.primary_white};
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 0 0 10px 10px;
  overflow-y: scroll;
`;

const DropdownList = styled(Result)`
  border: none;
  border-radius: 0;
  &:hover {
    background-color: #fff0cc;
  }
`;

function DefaultDropdown() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [result, setResult] = useState('옵션 1');

  const resultDropdownHandler = () => {
    setIsDropdown((prev) => !prev);
  };

  const changeResultHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.textContent) {
      setResult(e.currentTarget.textContent);
      setIsDropdown(false);
    }
  };
  return (
    <Container>
      <Result onClick={resultDropdownHandler} isDropdown={isDropdown}>
        {result}
      </Result>
      {isDropdown ? (
        <Dropdown>
          <DropdownList onClick={changeResultHandler}>옵션 1</DropdownList>
          <DropdownList onClick={changeResultHandler}>옵션 2</DropdownList>
          <DropdownList onClick={changeResultHandler}>옵션 3</DropdownList>
          <DropdownList onClick={changeResultHandler}>옵션 4</DropdownList>
          <DropdownList onClick={changeResultHandler}>옵션 5</DropdownList>
        </Dropdown>
      ) : null}
    </Container>
  );
}

export default DefaultDropdown;
