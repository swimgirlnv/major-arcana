import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import TopBar from './SiteComponents/TopBar';
import Journal from './routes/Journal/Journal';
import About from './routes/About/About';

// Love Imports
import Love from './routes/Love/Love';
import HTF from './routes/Love/HTF';

// Career Imports
import Career from './routes/Career/Career';
import ShootingForward from './routes/Career/ShootingForward';
import SelfReflection from './routes/Career/SelfReflection';

// Daily Imports
import Daily from './routes/Daily/Daily';
import LinearDay from './routes/Daily/LinearDay';
import DreamMessages from './routes/Daily/DreamMessages';
import TrustYourGut from './routes/Daily/TrustYourGut';

import Footer from './SiteComponents/Footer';
import Tips from './routes/Tips/Tips';
import Completionist from './routes/Career/Completionist';

import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <div id="top-of-page">
        <TopBar onLogout={() => setToken("")} />
      </div>
      <Routes>
        {!token ? (
          <Route path="*" element={<Login setToken={setToken} />} />
        ) : (
          <>
            <Route path="/" element={<Home onLogout={() => setToken("")} />} />
            <Route path="/career" element={<Career />} />
            <Route path="/love" element={<Love />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route path="/HTF" element={<HTF />} />
            <Route path="/linearDay" element={<LinearDay />} />
            <Route path="/dreamMessages" element={<DreamMessages />} />
            <Route path="/trustYourGut" element={<TrustYourGut />} />
            <Route path="/shootingForward" element={<ShootingForward />} />
            <Route path="/selfReflection" element={<SelfReflection />} />
            <Route path="/completionist" element={<Completionist />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;