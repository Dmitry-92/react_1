import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Factorial from './components/Factorial';
import Power from './components/Power';
import React from 'react';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('main');

  let menu =
  {
    "Главная": "main",
    "Факториал": "factorial",
    "Степень": "power",
    "Магазин": "shop",
    "Новости": "news",
    "О компании": "about",
    "Контакты": "contacts"
  }
  return (
    <div className="App">
      <Header />
      <Nav menu={menu} onMenuClick={setPage} />
      {page === 'main' && <Main />}
      {page === 'factorial' && <Factorial />}
      {page === 'power' && <Power />}
      <Footer />
    </div>
  );
}

export default App;
