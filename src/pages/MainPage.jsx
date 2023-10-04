import MainLayout from '../components/layout/MainLayout.jsx';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export default function MainPage({}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            sideBarLinks={[
              { name: 'Home', icon: FiHome, to: 'home' },
              { name: 'Explore', icon: FiCompass, to: 'home' },
              { name: 'Favourites', icon: FiStar, to: 'home' },
              { name: 'Statistic', icon: FiTrendingUp, to: 'statistic' },
              { name: 'Help', icon: BsFillQuestionCircleFill, to: 'help' },
              { name: 'Settings', icon: FiSettings, to: 'home' },
            ]}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Help() {
  return (
    <div>
      <h2>Help</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
