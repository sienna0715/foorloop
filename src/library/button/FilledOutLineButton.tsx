import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #1a1200;
  border-radius: 10px;
  background-color: #fff8e7;

  font-family: prentendard;
  font-size: 16px;
  font-weight: 500;
  color: #1a1200;

  &:hover {
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    background-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
`;

function FilledOutLineButton() {
  return <Button type="button">Button</Button>;
}

export default FilledOutLineButton;
