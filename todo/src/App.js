

import Home from './pages/home';
import Todo from './pages/todo';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import Navbar1 from './navbar';
import Register from './pages/register';
// components


function App() {
  return (
    <div>
      
      
      <>

      <Navbar1/>
      <Routes>
      
      <Route index element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/todos" element={<Todo/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
      </>
      
      
      
      
    </div>
    
  );
}

export default App;
