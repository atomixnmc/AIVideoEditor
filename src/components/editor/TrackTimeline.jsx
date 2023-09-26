import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import {
  BsBodyText,
  BsFastForward,
  BsForward,
  BsImage,
  BsPlay,
  BsPlayBtnFill,
  BsSoundwave,
  BsStop,
  BsVoicemail,
} from 'react-icons/bs';
import Track from './Track';

export default function TrackTimeline({ title }) {
  return (
    <Box>
      <Flex bg="gray.50">
        <Center ml="8px">
          <BsPlayBtnFill ml="8px" /> {title}
        </Center>
        <Spacer />
        <Button>
          <BsStop />
        </Button>
        <Button>
          <BsPlay />
        </Button>
        <Button>
          <BsFastForward />
        </Button>
        <Flex w="100px">
          <Button>2x</Button>
        </Flex>
      </Flex>
      <Stack bg="gray.200" maxH="220px" overflowY="scroll">
        <Track icon={<BsImage />} />
        <Track icon={<BsSoundwave />} />
        <Track icon={<BsBodyText />} />
      </Stack>
    </Box>
  );
}
