import { useEffect } from 'react';
import styled from 'styled-components';
import { FONT_STYLE_V1 } from '../styles/fontStyles';
import { PALLETTE_MAIN } from '../styles/colors';
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTDESKTOP,
} from '../breakpoint';
// images
import developer1 from '../assets/images/sion.png';
import developer2 from '../assets/images/moosung.png';
import designer1 from '../assets/images/hyejin.png';
import designer2 from '../assets/images/miye.png';

const AboutusWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const AboutusContainer = styled.div`
  width: 100%;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(2) {
    padding-top: 15rem;
    padding-bottom: 20rem;
  }
`;
const Title = styled.div`
  ${FONT_STYLE_V1.text.text_60_medium};
  padding-bottom: 3rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_45_medium};
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_30_medium};
  }
`;
const Content = styled.p`
  ${FONT_STYLE_V1.text.text_18_medium};
  line-height: 2;
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    ${FONT_STYLE_V1.text.text_16_medium};
    padding: 0 10rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.text.text_14_medium};
    padding: 0 5rem;
  }
`;
const MemberBox = styled.ul`
  width: max-content;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Member = styled.li`
  width: 20rem;
  height: 40rem;
  margin-right: 3rem;
  background-color: ${PALLETTE_MAIN.sub_main};
  color: ${PALLETTE_MAIN.main};
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0;
    margin-bottom: 3rem;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;
const MemerImg = styled.img`
  width: 17rem;
`;
const MemerName = styled.span`
  ${FONT_STYLE_V1.text.text_18_medium};
  line-height: 2;
  padding-top: 1rem;
`;
const MemerPositon = styled.span`
  ${FONT_STYLE_V1.text.text_12_medium};
  padding-bottom: 3rem;
`;
const MemerUrl = styled.a`
  ${FONT_STYLE_V1.text.text_14_medium};
  color: ${PALLETTE_MAIN.main};
`;

function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutusWrap>
      <AboutusContainer>
        <Section>
          <Title>HISTORY</Title>
          <Content>
            The FOR&#123;LOOP&#125; library started small to simply create an
            icons library. So it may have many flaws. <br />
            However, FOR&#123;LOOP&#125; tried to show its style. Two designers
            and two front-end developers participated in this project,
            <br /> completing the current FOR&#123;LOOP&#125;.
            <br />
            <br />
            The core value of FOR&#123;LOOP&#125; is that it is a library you
            want to use again. <br /> With that in mind, we came up with the
            name &#39;FOR&#123;LOOP&#125;&#39; which means loop statement.
          </Content>
        </Section>
        <Section>
          <Title>MEMBER</Title>
          <MemberBox>
            <Member>
              <MemerImg src={designer1} alt="designer-hyejin" />
              <MemerName>Lee Hye Jin</MemerName>
              <MemerPositon>Designer</MemerPositon>
              <MemerUrl>.</MemerUrl>
              <MemerUrl>lhj941123@gmail.com</MemerUrl>
            </Member>
            <Member>
              <MemerImg src={designer2} alt="designer-miye" />
              <MemerName>Gil Mi Ye</MemerName>
              <MemerPositon>Designer</MemerPositon>
              <MemerUrl>.</MemerUrl>
              <MemerUrl>.</MemerUrl>
            </Member>
            <Member>
              <MemerImg src={developer2} alt="develper-moosung" />
              <MemerName>Kim Moo Sung</MemerName>
              <MemerPositon>FrontEnd Developer</MemerPositon>
              <MemerUrl href="https://github.com/lapmu">Github</MemerUrl>
              <MemerUrl>antjdgkdl@gmail.com</MemerUrl>
            </Member>
            <Member>
              <MemerImg src={developer1} alt="develper-sion" />
              <MemerName>Lee Si On</MemerName>
              <MemerPositon>FrontEnd Developer</MemerPositon>
              <MemerUrl href="https://github.com/sienna0715">Github</MemerUrl>
              <MemerUrl>sion8120@gmail.com</MemerUrl>
            </Member>
          </MemberBox>
        </Section>
      </AboutusContainer>
    </AboutusWrap>
  );
}

export default Aboutus;
