import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Factorial from './components/Factorial';
import Power from './components/Power';
import Fibonacci from './components/Fibonacci';
import React from 'react';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('main');

  let menu =
  {
    "Главная": "main",
    "Факториал": "factorial",
    "Степень": "power",
    "Фибоначчи": "fibonacci",
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
      {page === 'fibonacci' && <Fibonacci />}
      <Footer />
    </div>
  );
}

export default App;
