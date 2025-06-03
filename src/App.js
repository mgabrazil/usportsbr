import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import Header from '../src/components/Header';
import WhatsappBtn from './components/WhatsappBtn';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Header/>
        <WhatsappBtn/>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
