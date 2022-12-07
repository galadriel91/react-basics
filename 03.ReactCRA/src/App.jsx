import React from 'react'
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoContainer from './components/TodoContainer';
import './assets/scss/index.scss'

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