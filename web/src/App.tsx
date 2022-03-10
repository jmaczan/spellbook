import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Install } from './components/install/install';
import { Search } from './components/search/search';
import { Footer } from './components/footer/footer';
import { Spell } from './components/spell-item/types';
import { About } from './components/about/about';
import { License } from './components/license/license';
import { Documentation } from './components/documentation/documentation';

function App() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [query, setQuery] = useState<string>('');

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar onChange={setSpells} query={query} setQuery={setQuery} />
          <div className='app__content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/install' element={<Install />} />
              <Route path='/search' element={<Search spells={spells} query={query} />} />
              <Route path='/about' element={<About />} />
              <Route path='/license' element={<License />} />
              <Route path='/documentation' element={<Documentation />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
