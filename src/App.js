import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from './components/layout';
import { HomePage } from './pages/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
