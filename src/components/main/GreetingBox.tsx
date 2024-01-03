import styled from 'styled-components';
import pastor from '../../assets/images/pastor.png';
import { GREETINGS, PASTOR, POSITION } from '../../assets/data/greetings';
import { ReactComponent as SignSvg } from '../../assets/images/sign.svg';

export const GreetingBox = () => {
  return (
    <Container>
      <ImageBox src={pastor} />
      <InnerContainer>
        <Greetings>{GREETINGS}</Greetings>
        <BottomContainer>
          <div>
            <Greetings>{PASTOR}</Greetings>
            <Greetings>{POSITION}</Greetings>
          </div>
          <SignSvg />
        </BottomContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 366px;
  height: 366px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ImageBox = styled.img`
  margin-top: 26px;
  margin-right: 37px;
  width: 141px;
  height: 201px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 20px;
`;

const Greetings = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  white-space: pre-line;
  word-break: keep-all;
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
