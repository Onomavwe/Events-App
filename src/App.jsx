import { useState } from 'react'
import './App.css'
import Sidebar from './pages/Admin/Sidebar';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Sidebar />
    </>
  );
}

export default App
