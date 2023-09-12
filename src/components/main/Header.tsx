import { useState } from 'react';
import { keyframes, styled } from 'styled-components';
import { Link } from 'react-router-dom';
// components
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALLETTE_MAIN } from '../../styles/colors';
import { BREAKPOINTMOBILE, BREAKPOINTDESKTOP } from '../../breakpoint';
import { ReactComponent as Hamberger } from '../../assets/list.svg';

const HeaderWrap = styled.div`
  width: 100%;
  height: 85px;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;
const HeaderContainer = styled.div`
  max-width: ${BREAKPOINTDESKTOP}px;
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 0 2rem;
  }
`;
const Logo = styled.span`
  ${FONT_STYLE_V1.text.text_24_medium};
  padding-right: 1rem;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_18_medium};
  }
`;
const Button = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  cursor: pointer;
  display: none;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    display: block;
  }
`;
const MenuBox = styled.ul`
  ${FONT_STYLE_V1.text.text_18_medium};
  display: flex;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    display: none;
  }
`;
const menuSlideOpen = keyframes`
  from {
    visibility: hidden;
    height: 20vh;
  }
  to {
    visibility: visible;
    height: 100vh;
  }
`;
const MMenuBox = styled.ul<{ isSlide: boolean }>`
  ${FONT_STYLE_V1.text.text_14_medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${PALLETTE_MAIN.main};
  position: absolute;
  top: 80px;
  z-index: 999;
  animation: ${menuSlideOpen} 1s ease;
  @media screen and (min-width: ${BREAKPOINTMOBILE}px) {
    display: none;
  }
`;

const Menu = styled.li`
  width: max-content;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 1.5px ${PALLETTE_MAIN.sub_main};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    line-height: 3.5;
  }
  @media screen and (min-width: ${BREAKPOINTMOBILE + 1}px) {
    margin-right: 3rem;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
`;

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Link to="/">
          <Logo>FOR&#123;LOOP&#125;</Logo>
        </Link>
        <MenuBox>
          <Menu>components</Menu>
          <Menu>icon</Menu>
          <Menu>about us</Menu>
        </MenuBox>
        <Button>
          <Hamberger
            onClick={() => {
              setIsMenu(!isMenu);
            }}
          />
        </Button>
      </HeaderContainer>
      {isMenu && (
        <MMenuBox isSlide={isMenu}>
          <Menu>components</Menu>
          <Menu>icon</Menu>
          <Menu>about us</Menu>
        </MMenuBox>
      )}
    </HeaderWrap>
  );
}

export default Header;
