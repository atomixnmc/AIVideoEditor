import { Box } from '@chakra-ui/react';
import { Player } from '@remotion/player';
import { VideoComposition1 } from '../videocomp/VideoComposition';

export default function PreviewViewport() {
  return (
    <Box>
      <Player
        controls
        // style={{ width: '100%', height: '100%' }}
        component={VideoComposition1}
        durationInFrames={30 * 60 * 3}
        compositionWidth={400}
        compositionHeight={400}
        fps={30}
      />
    </Box>
  );
}
