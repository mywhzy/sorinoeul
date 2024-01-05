import styled from 'styled-components';
import { GreetingBox } from '../components/main/GreetingBox';
import { IntroductionBox } from '../components/main/IntroductionBox';
import { TrackListBox } from '../components/main/TrackListBox';
import { AlbumCredit } from '../components/main/AlbumCredit';

export const MainPage = () => {
  return (
    <Container>
      <GreetingBox />
      <IntroductionBox />
      <TrackListBox />
      <AlbumCredit />
    </Container>
  );
};

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  box-sizing: border-box;
  background: #f4f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
