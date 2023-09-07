import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../styles/colors';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';

const Button = styled.button`
  padding: 1rem;
  border-radius: 50%;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: ${PALLETTE_MAIN.sub_main};
    .icon {
      fill: ${PALLETTE_MAIN.main};
    }
  }
  .icon {
    fill: ${PALLETTE_MAIN.sub_main};
  }
`;

function ArrowButton() {
  return (
    <Button>
      <ArrowIcon className="icon" />
    </Button>
  );
}

export default ArrowButton;
