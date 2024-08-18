import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Overview from './pages/Overview';
import Location from './pages/Location';
import Audience from './pages/Audience';
import Exhibitor from './pages/Exhibitor';
import Traffic from './pages/Traffic';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

import ReactGA from 'react-ga';
ReactGA.initialize('G-2YGDZ9NQ05');

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Navbar />
      <RouteChangeTracker />
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/location' element={<Location />} />
        <Route path='/audience' element={<Audience />} />
        <Route path='/exhibitor' element={<Exhibitor />} />
        <Route path='/traffic' element={<Traffic />} />
      </Routes>
    </BrowserRouter>
  );
}

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    console.log('useEffect 🚀 :', location.pathname);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
