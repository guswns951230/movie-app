import React from 'react';

import Home from './routes/Home';
import Detail from './routes/Detail';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <div>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
          <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
