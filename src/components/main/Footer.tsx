import { styled } from 'styled-components';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALLETTE_MAIN } from '../../styles/colors';

const FooterWrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${PALLETTE_MAIN.sub_main};
  color: ${PALLETTE_MAIN.main};
`;
const FooterContainer = styled.div`
  height: 80px;
  margin: 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.span`
  ${FONT_STYLE_V1.text.text_24_medium};
`;
const MenuBox = styled.ul`
  ${FONT_STYLE_V1.text.text_18_medium};
  display: flex;
`;
const Menu = styled.li`
  margin-right: 3rem;
  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>
        <Logo>FOR&#123;LOOP&#125;</Logo>
        <MenuBox>
          <Menu>components</Menu>
          <Menu>icon</Menu>
          <Menu>color</Menu>
          <Menu>about us</Menu>
        </MenuBox>
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;
