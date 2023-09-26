import { Video, Series } from 'remotion';

export const VideoComposition1 = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={60}>
        <Video
          src={
            'https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761'
          }
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={60} offset={-10}>
        <Video src="https://player.vimeo.com/external/269971860.hd.mp4?s=eae965838585cc8342bb5d5253d06a52b2415570&profile_id=174&oauth2_token_id=57447761" />
      </Series.Sequence>
    </Series>
  );
};
