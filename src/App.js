import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;