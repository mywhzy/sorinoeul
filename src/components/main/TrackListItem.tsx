import styled from 'styled-components';
import { ReactComponent as TrackDownSvg } from 'assets/icons/mp3-download-icon.svg';
import { ReactComponent as ScoreDownSvg } from 'assets/icons/score-download-icon.svg';
import { downloadFile } from 'utils/downloadFile';

type Track = {
  trackNumber: number;
  title: string;
  subtitle?: string;
  credit: Credit;
  soundTrackURL: string;
  scoreURL?: string | null;
  scores?: string[] | null;
};

type Credit = {
  vocal?: string[] | null;
  songWriter?: string[] | null;
  originalSong?: string[] | null;
  arrangers?: string[] | null;
  chorus?: string[] | null;
  kids?: string[] | null;
  bass: string[] | null;
  drum: string[] | null;
  electricGuitar: string[] | null;
  acousticGuitar?: string[] | null;
  piano: string[] | null;
  keyboard: string[] | null;
};

export type TrackListItemProps = {
  track: Track;
  onClick?: () => void;
};

export const TrackListItem = ({ track, onClick }: TrackListItemProps) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <ItemLeftBox onClick={onClick} $isScore={!!track.scores}>
          <Title>{String(track.trackNumber).padStart(2, '0')}.</Title>
          <TrackInfoContainer>
            <TrackInfoInnerContainer>
              <Title>
                {track.title} {track.subtitle && track.subtitle}
              </Title>
              {track.credit.vocal &&
                track.credit.vocal.map((name, index) => (
                  <TrackInfo key={index}>{name}</TrackInfo>
                ))}
            </TrackInfoInnerContainer>
            {track.credit.arrangers && (
              <TrackInfoInnerContainer>
                <TrackInfo>
                  {track.credit.songWriter
                    ? track.credit.songWriter + ' 사/곡 '
                    : track.credit.originalSong + ' / '}
                </TrackInfo>
                <TrackInfo>편곡 </TrackInfo>
                {track.credit.arrangers.map((arranger, index) => (
                  <TrackInfo key={index}>{arranger}</TrackInfo>
                ))}
              </TrackInfoInnerContainer>
            )}
          </TrackInfoContainer>
        </ItemLeftBox>
        <DownloadButton
          onClick={() =>
            downloadFile(
              track.soundTrackURL,
              track.trackNumber + '.' + track.title + '.mp3'
            )
          }
        >
          <TrackDownSvg />
          <IconTitle>MP3</IconTitle>
        </DownloadButton>
      </InnerContainer>
      {track.scoreURL ? (
        <DownloadButton
          onClick={() =>
            track.scoreURL &&
            downloadFile(
              track.scoreURL,
              track.trackNumber + '.' + track.title + '.pdf'
            )
          }
        >
          <ScoreDownSvg />
          <IconTitle>악보</IconTitle>
        </DownloadButton>
      ) : (
        <EmptyDownloadBox />
      )}
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  max-width: 310px;
  width: 100%;
  justify-content: space-between;
  word-break: keep-all;
`;

const ItemLeftBox = styled.div<{ $isScore: boolean }>`
  display: flex;
  gap: 15px;
  cursor: ${({ $isScore }) => ($isScore ? 'pointer' : 'auto')};
`;

const Title = styled.h2`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  min-width: fit-content;
`;

const TrackInfo = styled.h3`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const IconTitle = styled.p`
  color: #000;
  font-size: 10px;
  line-height: 12px;
`;

const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackInfoInnerContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const DownloadButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const EmptyDownloadBox = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 20px;
  height: 34px;
`;
