import React from 'react'
import ApiHeader from './components/ApiHeader';
import ApiLoading from './components/ApiLoading';
import ListPage from './pages/ListPage';
import { Route, Routes , Navigate } from 'react-router-dom';
import './assets/scss/index.scss';

const App = () => {
  return ( 
    <div className='container'>
      <ApiHeader/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/news"/> }/>
        <Route path="/news" element={<ListPage />}/>
        <Route path="/ask" element={<ListPage />}/>
        <Route path="/jobs" element={<ListPage />}/>
      </Routes>
      <ApiLoading loading={false}/>
    </div>
  );
}

export default App;