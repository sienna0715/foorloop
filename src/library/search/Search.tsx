import { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import DeleteImg from '../../assets/input-delete.png';
import SearchImg from '../../assets/search.png';

const SearchWrap = styled.div`
  .focus {
    border: 1px solid ${PALETTE_COMPONENT.primary_black};
  }
`;
const SearchContainer = styled.div`
  width: 400px;
  height: 60px;
  padding: 0.8rem;
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
`;
const SearchIcon = styled.img``;
const Input = styled.input`
  ${FONT_STYLE_V1.text.text_10_medium};
  outline: none;
  border: none;
  width: 100%;
  margin: 0 10px;
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const DeleteBtn = styled.img``;

export default function Search() {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchWrap>
      {isFocus ? (
        <SearchContainer className="focus">
          <SearchIcon src={SearchImg} />
          <Input
            type="text"
            placeholder="search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={handleChange}
          />
          {isFocus && count !== 0 && (
            <DeleteBtn src={DeleteImg} onClick={() => setValue('')} />
          )}
        </SearchContainer>
      ) : (
        <SearchContainer>
          <SearchIcon src={SearchImg} />
          <Input
            type="text"
            placeholder="search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            onChange={handleChange}
          />
          {isFocus && count !== 0 && (
            <DeleteBtn src={DeleteImg} onClick={() => setValue('')} />
          )}
        </SearchContainer>
      )}
    </SearchWrap>
  );
}
