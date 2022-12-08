import React from 'react'
import ApiHeader from './components/ApiHeader';
import ApiLoading from './components/ApiLoading';
import './assets/scss/index.scss';

const App = () => {
  return ( 
    <div className='container'>
      <ApiHeader/>
      <ApiLoading loading={false}/>
    </div>
  );
}

export default App;