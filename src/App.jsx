import { useState } from "react";
import "./App.css";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
// import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Event from "./pages/Event";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="manage/" element={<Manage />} />
        {/* <Route path="create/" element={<Create />} /> */}
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
        <Route path="event/" element={<Event />} />
        <Route path="admin/" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
