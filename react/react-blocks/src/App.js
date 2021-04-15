import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';
import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('test string 123')
  return (
    <div className="app">
      <Header idioma='fr' pais='ca' />
      <Navigation />
      <Main>
        <Subcontent textoDesdeArriba={{texto, setTexto}} />
        <Subcontent textoDesdeArriba={{texto, setTexto}} />
        <Subcontent textoDesdeArriba={{texto, setTexto}} />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
