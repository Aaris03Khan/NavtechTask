import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Orders from "./components/Orders";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Orders" element={<Orders/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;