import React from 'react';
import './assets/scss/index.scss'
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';

const App = () => {
  return ( 
    <div className='container'>
      <TodoHeader/>
      <TodoInput/>
    </div>
  );
}

export default App;
