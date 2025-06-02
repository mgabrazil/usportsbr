import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import Header from '../src/components/Header';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Header/>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
