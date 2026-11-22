import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Factorial from './components/Factorial';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('main');

  let menu =
  {
    "Главная": "/index",
    "Факториал": "/factorial",
    "Магазин": "/shop",
    "Новости": "/news",
    "О компании": "/about",
    "Контакты": "/contacts"
  }
  return (
    <div className="App">
      <Header />
      <Nav menu={menu} />
      {page === 'main' && <Main />}
      {page === 'factorial' && <Factorial />}
      <Footer />
    </div>
  );
}

export default App;
