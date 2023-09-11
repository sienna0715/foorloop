import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../styles/colors';
import { ReactComponent as ArrowIcon } from '../assets/arrowButton.svg';

const Button = styled.button`
  border: none;
  background-color: transparent;
  transform: rotate(0.5turn);
  cursor: pointer;
  .icon {
    circle {
      fill: ${PALLETTE_MAIN.main};
      stroke: ${PALLETTE_MAIN.sub_main};
    }
    path {
      fill: ${PALLETTE_MAIN.sub_main};
    }
  }
  &:hover {
    .icon {
      circle {
        fill: ${PALLETTE_MAIN.sub_main};
        stroke: ${PALLETTE_MAIN.sub_main};
      }
      path {
        fill: ${PALLETTE_MAIN.main};
      }
    }
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
