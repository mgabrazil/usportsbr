import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Fabricacao from '../pages/Fabricacao';
import Design from '../pages/Design';
import Tecidos from '../pages/Tecidos';
import SearchResults from '../pages/SearchResults';

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/tecidos' element={ <Tecidos/> } />
            <Route path='/fabricacao' element={ <Fabricacao/> } />
            <Route path='/design' element={ <Design/> } />

            <Route path='/search' element={ <SearchResults/> } />
        </Routes>
    )
}