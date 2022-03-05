import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/home';
import { Install } from './components/install/Install';
import { Search } from './components/search/Search';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='app__content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/install' element={<Install />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
