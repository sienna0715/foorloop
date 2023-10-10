import styled from 'styled-components';
// components
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../../../breakpoint';
import ArrowButton from '../../ArrowButton';

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    gap: 25rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    gap: 12rem;
  }
`;

const ArrowButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(0.5turn);
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const LeftArrowButtonBorder = styled(ArrowButtonBorder)`
  transform: none;
`;

interface IMainIconRightArrowButtonProps {
  rightArrowButtonHandler: () => void;
  leftArrowButtonHandler: () => void;
}

function MainIconArrowButton({
  rightArrowButtonHandler,
  leftArrowButtonHandler,
}: IMainIconRightArrowButtonProps) {
  return (
    <ArrowButtonContainer>
      <ArrowButtonBorder onClick={rightArrowButtonHandler}>
        <ArrowButton />
      </ArrowButtonBorder>
      <LeftArrowButtonBorder onClick={leftArrowButtonHandler}>
        <ArrowButton />
      </LeftArrowButtonBorder>
    </ArrowButtonContainer>
  );
}

export default MainIconArrowButton;
