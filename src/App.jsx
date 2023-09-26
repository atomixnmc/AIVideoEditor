import { useState } from 'react';
//import 'dockview/dist/styles/dockview.css';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import EditorPage from './pages/EditorPage.jsx';

export default function App() {
  return (
    <>
      <ChakraProvider>
        <EditorPage />
      </ChakraProvider>
    </>
  );
}
