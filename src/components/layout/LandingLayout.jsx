import { Box, Flex, Grid } from '@chakra-ui/react';
import SideBar from './SideBar.jsx';
import PageHeader from './PageHeader.jsx';
import PageFooter from './PageFooter.jsx';

export default function LandingLayout({ children, user }) {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}
