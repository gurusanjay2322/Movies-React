import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SingleMovie from './pages/SingleMovie';
function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/movie/:imdbId" element={<SingleMovie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
