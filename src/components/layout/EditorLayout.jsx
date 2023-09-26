import { Box, Flex, Grid } from '@chakra-ui/react';
import SideBar from './SideBar.jsx';

export default function EditorLayout({ children, top, bottom }) {
  return (
    <Box w="100vw" h="100vh">
      {top}
      <Box w="100%" h="calc(100vh - 40px)">
        <Flex h="calc(80vh - 40px)">
          {/* <SideBar w="120px" bg="blue.500" /> */}

          {children}
        </Flex>
        <Box h="20vh">{bottom}</Box>
      </Box>
    </Box>
  );
}
