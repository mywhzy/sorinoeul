import styled from 'styled-components';
import albumArt from 'assets/images/album-art.png';
import { ReactComponent as AudioPlayIcon } from 'assets/icons/audio-play-icon.svg';
import { ReactComponent as OpenPdfIcon } from 'assets/icons/open-pdf-icon.svg';
import { TrackListItemProps } from 'components/main/TrackListItem';
import { isValidArray } from "../../utils/isValidArray";

export const TrackTitleBox = ({ track }: TrackListItemProps) => {
  return (
    <Container>
      <AlbumArtContainer>
        <AlbumArtImage src={albumArt} />
      </AlbumArtContainer>
      <TitleBox>
        <TrackInfoBox $isSubTitle={!!track.subtitle}>
          <TrackNumber>
            {String(track.trackNumber).padStart(2, '0')}.
          </TrackNumber>
          <TitleInnerContainer $isScore={!!track.scoreURL}>
            <div>
              <TrackTitle>{track.title}</TrackTitle>
              {track.subtitle && (
                <TrackSubTitle>{track.subtitle}</TrackSubTitle>
              )}
              {track.credit.vocal && isValidArray(track.credit.vocal) && (
                <TrackVocal>
                  {track.credit.vocal.join(" ")}
                </TrackVocal>
              )}
            </div>
            <IconContainer>
              <a
                href={track.soundTrackURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AudioPlayIcon />
              </a>
              {track.scoreURL && (
                <a
                  href={track.scoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenPdfIcon />
                </a>
              )}
            </IconContainer>
          </TitleInnerContainer>
        </TrackInfoBox>
      </TitleBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 380px;
`;

const AlbumArtContainer = styled.div`
  max-width: 87px;
  height: 87px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25) inset;
  margin-right: 36px;
`;

const AlbumArtImage = styled.img`
  max-width: 76px;
  margin: 5px;
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  word-break: keep-all;
`;

const TitleInnerContainer = styled.div<{ $isScore: boolean }>`
  display: flex;
  max-width: ${({ $isScore }) => ($isScore ? '230px' : '200px')};
  justify-content: space-between;
  align-items: center;
`;

const TrackInfoBox = styled.div<{ $isSubTitle: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ $isSubTitle }) => ($isSubTitle ? '0' : '7px')};
`;

const TrackNumber = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

const TrackTitle = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const TrackSubTitle = styled.h3`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 16px;
`;

const TrackVocal = styled.p`
  color: #000;
  font-size: 15px;
  line-height: 18px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;
