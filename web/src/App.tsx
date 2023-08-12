import React, { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Install } from './components/install/install';
import { Footer } from './components/footer/footer';
import { Spell } from './components/spell-item/types';
import { About } from './components/about/about';
import { License } from './components/license/license';
import { Documentation } from './components/documentation/documentation';
import { AddScript } from './components/add/add';
import { SpellPage } from './components/spell/spell-page';
import { Toaster } from 'react-hot-toast';

function App() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [query, setQuery] = useState<string>('');
  const [fetchingSpells, setFetchingSpells] = useState<boolean>(false);

  const onChange = useCallback(
    (spell?: Spell) => {
      setFetchingSpells(false);

      if (!spell) {
        setSpells([]);
        return;
      }

      setSpells([spell]);
    },
    [spells],
  );

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar
            onChange={onChange}
            query={query}
            setQuery={setQuery}
            fetchingSpells={fetchingSpells}
            setFetchingSpells={setFetchingSpells}
          />
          <div><Toaster/></div>
          <div className='app__content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/install' element={<Install />} />
              <Route path='/spell/:spell' element={<SpellPage spells={spells} query={query} setQuery={setQuery} fetching={fetchingSpells} />} />
              <Route path='/about' element={<About />} />
              <Route path='/license' element={<License />} />
              <Route path='/documentation' element={<Documentation />} />
              <Route path='/add' element={<AddScript />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
