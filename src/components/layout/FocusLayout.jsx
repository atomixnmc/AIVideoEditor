import { Box, Flex, Grid } from '@chakra-ui/react';
import SideBar from './SideBar.jsx';
import PageHeader from './PageHeader.jsx';

export default function FocusLayout({ children, user }) {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
