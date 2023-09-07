import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import ArrowButton from '../ArrowButton';

const ContentsWrap = styled.div`
  width: 100%;
  margin-top: -15rem;
  margin-bottom: 10rem;
`;
const ContentsContainer = styled.div`
  margin: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  ${FONT_STYLE_V1.text.text_100_medium};
  padding-bottom: 10rem;
`;
const CardContainer = styled.div`
  width: 75vw;
  margin-top: -3rem;
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 30%;
  padding: 5rem;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const CardImg = styled.img`
  padding: 13rem;
`;
const CardTitle = styled.span`
  ${FONT_STYLE_V1.text.text_40_medium};
  padding-bottom: 1.5rem;
`;
const CardText = styled.span`
  ${FONT_STYLE_V1.text.text_18_medium};
  width: 200px;
  text-align: center;
`;
const ButtonBox = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`;

function Contents() {
  return (
    <ContentsWrap>
      <ContentsContainer>
        <Title>CONTENTS</Title>
        <CardContainer>
          <Card>
            <CardImg />
            <CardTitle>ICON</CardTitle>
            <CardText>폴룹만의 다양한 아이콘을 사용해보세요.</CardText>
            <ButtonBox>
              <ArrowButton />
            </ButtonBox>
          </Card>
          <Card>
            <CardImg />
            <CardTitle>COMPONENT</CardTitle>
            <CardText>
              재사용성이 높은 폴룹만의 컴포넌트를 사용해보세요.
            </CardText>
            <ButtonBox>
              <ArrowButton />
            </ButtonBox>
          </Card>
          <Card>
            <CardImg />
            <CardTitle>COLOR</CardTitle>
            <CardText>폴룹 라이브러리의 색상을 사용해보세요.</CardText>
            <ButtonBox>
              <ArrowButton />
            </ButtonBox>
          </Card>
        </CardContainer>
      </ContentsContainer>
    </ContentsWrap>
  );
}

export default Contents;
