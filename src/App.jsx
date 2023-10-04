import { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import EditorPage from './pages/EditorPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Helmet>
        <title>AI Video Editor</title>
      </Helmet>
      <ChakraProvider>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage user={user} />} />
            <Route path="editor" element={<EditorPage user={user} />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="login" element={<LoginPage />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}
