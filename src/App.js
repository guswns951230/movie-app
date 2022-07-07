import React from 'react';

import Home from './routes/Home';
import Detail from './routes/Detail';

import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={`/movie/:id`} element={<Detail />} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    </Routes>
  );
}

export default App;
