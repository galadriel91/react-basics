import React from 'react';
import './assets/scss/index.scss'
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoContainer from './components/TodoContainer';

const App = () => {
  return ( 
    <div className='container'>
      <TodoHeader/>
      <TodoInput/>
      <TodoContainer/>
    </div>
  );
}

export default App;
