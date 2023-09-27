import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import { PALLETTE_MAIN } from '../styles/colors';
import { BREAKPOINTMOBILE, BREAKPOINTTABLET } from '../breakpoint';

const FooterWrap = styled.div`
  width: 100%;
  height: 85px;
  background-color: ${PALLETTE_MAIN.sub_main};
  color: ${PALLETTE_MAIN.main};
`;
const FooterContainer = styled.div`
  height: 80px;
  margin: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin: 0 2.5rem;
  }
`;
const Logo = styled.span`
  ${FONT_STYLE_V1.text.text_24_medium};
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_18_medium};
  }
`;
const MenuBox = styled.ul`
  ${FONT_STYLE_V1.text.text_18_medium};
  display: flex;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_14_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_10_medium};
  }
`;
const Menu = styled.li`
  margin-right: 3rem;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 1.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-right: 1rem;
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>
        <Logo>FOR&#123;LOOP&#125;</Logo>
        <MenuBox>
          <Menu>components</Menu>
          <Menu>
            <Link to="/icons">icons</Link>
          </Menu>
          <Menu>about us</Menu>
        </MenuBox>
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;
