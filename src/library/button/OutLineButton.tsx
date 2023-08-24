import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #fff8e7;
  border-radius: 10px;
  background-color: #ffffff;

  font-size: 16px;
  font-weight: 500;
  color: #1a1200;

  &:hover {
    border-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    border-color: #ffd166;
    box-shadow: 0 0 14px #66470020;
  }
`;

function OutLineButton() {
  return <Button type="button">Button</Button>;
}

export default OutLineButton;
