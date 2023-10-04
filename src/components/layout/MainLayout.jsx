import { Box, Flex, Grid } from '@chakra-ui/react';
import SideBar from './SideBar.jsx';
import PageHeader from './PageHeader.jsx';

import { Routes, Route, Outlet, Link } from 'react-router-dom';
export default function MainLayout({ children, top, sideBarLinks }) {
  return (
    <>
      <PageHeader />
      <Flex>
        <SideBar w="120px" bg="blue.500" sideBarLinks={sideBarLinks} />
        <Box w="100vw" h="100vh">
          {top}
          <Box w="100%" h="calc(100vh - 40px)">
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
