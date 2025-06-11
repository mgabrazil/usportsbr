import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Fabricacao from '../pages/Fabricacao';
import Design from '../pages/Design';
import Tecidos from '../pages/Tecidos';
import SearchResults from '../pages/SearchResults';

import PartnerADEF from '../pages/PartnerADEF';
import PartnerCBFS from '../pages/PartnerCBFS';
import PartnerSUB17 from '../pages/PartnerSUB17';
import PartnerLFF from '../pages/PartnerLFF';

export default function RoutesApp(){
    return(
        <Routes>
            
            <Route path='/' element={ <Home/> } />
            <Route path='/tecidos' element={ <Tecidos/> } />
            <Route path='/fabricacao' element={ <Fabricacao/> } />
            <Route path='/design' element={ <Design/> } />


            <Route path='/search' element={ <SearchResults/> } />


            <Route path='/adef' element={ <PartnerADEF/> } />
            <Route path='/cbfs' element={ <PartnerCBFS/> } />
            <Route path='/sub17' element={ <PartnerSUB17/> } />
            <Route path='/lff' element={ <PartnerLFF/> } />

        </Routes>
    )
}