import React from 'react'
import ApiHeader from './components/ApiHeader';
import ApiLoading from './components/ApiLoading';
import ListPage from './pages/ListPage';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
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
        <Route path="/user/:id" element={<UserPage/>}/>
        <Route path="/item/:id" element={<PostPage/>}/>
      </Routes>
      <ApiLoading/>
    </div>
  );
}

export default App;