import React from 'react'
import 'Style/index';
import RouterNav from 'Components/RouterNav';
import WebpackPage from 'Pages/WebpackPage';
import ReduxPage from 'Pages/ReduxPage';
import RouterPage from 'Pages/RouterPage';
import { Routes, Route} from 'react-router-dom'

const App = () => {
    return ( 
        <div>
            <RouterNav/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<WebpackPage/>} />
                    <Route path='/redux' element={<ReduxPage/>} />
                    <Route path='/router' element={<RouterPage/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;