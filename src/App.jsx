import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Overview from "./pages/Overview";
import Location from "./pages/Location";
import Audience from "./pages/Audience";
import Exhibitor from "./pages/Exhibitor";
import Traffic from "./pages/Traffic";
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import ReactGA from "react-ga";

ReactGA.initialize("G-2YGDZ9NQ05");

function App() {
  return (
   <BrowserRouter>
    <Layout/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/audience' element={<Audience/>}/>
        <Route path='/exhibitor' element={<Exhibitor/>}/>
        <Route path='/traffic' element={<Traffic/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
