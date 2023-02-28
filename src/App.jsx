import { useState } from "react";
import "./App.css";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
// import TopItems from './components/TopItems';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Admin />
      <main>
        {/* <TopItems /> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        {/* <Route path="/invoices" element={<Invoices />} /> */}
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        {/* <Route path="/bar" element={<Bar />} /> */}
        {/* <Route path="/pie" element={<Pie />} /> */}
        {/* <Route path="/line" element={<Line />} /> */}
        {/* <Route path="/geography" element={<Geography />} /> */}
        {/* </Routes> */}
      </main>
    </>
  );
}

export default App;
