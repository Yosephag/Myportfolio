import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>

        {/* Public Portfolio */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </Router>
  );
};

export default App;