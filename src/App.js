
import './index.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setusers] = useState([
    {
      
    }
  ])
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />} />
          <Route path="/signup" element={<Signup users={users} setusers={setusers} />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
