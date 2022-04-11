import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path ="/" element={<IndexPage/>} />
          <Route path="/:id" element={<DetailPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
