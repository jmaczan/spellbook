import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/home';
import { Install } from './components/install/Install';
import { Search } from './components/search/search';
import { Footer } from './components/footer/Footer';
import { Spell } from './components/spell-item/types';

function App() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [query, setQuery] = useState<string>('');

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar onChange={setSpells} query={query} setQuery={setQuery} />
        <div className='app__content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/install' element={<Install />} />
            <Route path='/search' element={<Search spells={spells} query={query} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
