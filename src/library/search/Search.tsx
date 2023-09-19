import { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import DeleteImg from '../../assets/input-delete.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchWrap = styled.div<{ color: string }>`
  .focus {
    border: 1px solid ${(props) => (props.color ? props.color : 'black')};
    box-shadow: 0px 0px 9px 0px
      ${(props) => (props.color ? props.color : 'black')};
  }
  cursor: pointer;
`;
const SearchContainer = styled.div<{ width: number }, { color: string }>`
  width: ${(props) => (props.width ? props.width : 400)}px;
  height: 60px;
  padding: 0.8rem;
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: ${(props) => (props.color ? props.color : 'black')};
  }
`;
const Input = styled.input<{ color: string }>`
  ${FONT_STYLE_V1.text.text_10_medium};
  width: 100%;
  margin: 0 10px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : 'black')};
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const DeleteBtn = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

interface ISearchProps {
  width: number;
  color: string;
}

export default function Search({ width = 400, color = 'black' }: ISearchProps) {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchWrap color={color}>
      <SearchContainer
        className={isFocus ? 'focus' : ''}
        width={width}
        color={color}
      >
        <SearchIcon />
        <Input
          type="text"
          placeholder="search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleChange}
          color={color}
        />
        {count !== 0 && (
          <DeleteBtn src={DeleteImg} onClick={() => setValue('')} />
        )}
      </SearchContainer>
    </SearchWrap>
  );
}
