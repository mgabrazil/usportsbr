import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Fabricacao from '../pages/Fabricacao';
import Design from '../pages/Design';

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> } />

            <Route path='/fabricacao' element={ <Fabricacao/> } />
            <Route path='/design' element={ <Design/> } />
        </Routes>
    )
}