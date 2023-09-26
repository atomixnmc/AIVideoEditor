import { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

import { ChakraProvider } from '@chakra-ui/react';
import EditorPage from './pages/EditorPage.jsx';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Helmet>
        <title>AI Video Editor</title>
      </Helmet>
      <ChakraProvider>
        <EditorPage user={user} />
      </ChakraProvider>
    </>
  );
}
