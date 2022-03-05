import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/home';
import { Install } from './components/install/Install';
import { Search } from './components/search/Search';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Spellbook</Link>
            </li>
            <li>
              <Link to='/install'>Install</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
          </ul>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/install' element={<Install />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
