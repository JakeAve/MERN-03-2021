import './App.css';
import Tabs from './components/Tabs';

const tabDeDatabase = [
    {etiqueta: 'Tab 1', contenido: 'Contenido 1'},
    {etiqueta: 'Tab 2', contenido: 'Contenido 2'},
    {etiqueta: 'Tab 3', contenido: 'Contenido 3'},
    {etiqueta: 'Tab 4', contenido: 'Contenido 4'},
]

function App() {
   

    return (
        <>
            <Tabs tabs={tabDeDatabase} />
        </>
    );
}

export default App;
