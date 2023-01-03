import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/volunteer" element={<Volunteers></Volunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
