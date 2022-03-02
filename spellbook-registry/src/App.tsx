import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Install } from './components/install/Install';
import { Search } from './components/search/Search';

function App() {
  return (
    <div className='App'>
      <Header />
      <Install />
      <Search />
    </div>
  );
}

export default App;
