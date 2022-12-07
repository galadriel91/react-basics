import React from 'react'
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import './assets/scss/index.scss'

const App = () => {
  return ( 
    <div className='container'>
      <TodoHeader/>
      <TodoInput/>
    </div>
  );
}
export default App;