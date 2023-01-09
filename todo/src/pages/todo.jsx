import React from 'react';
import '../App.css';

// components
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

function todo() {
  return (
    <div className='container'>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}
export default todo;
