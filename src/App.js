import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Student from "./Pages/Student";
import Teachers from "./Pages/Teachers";
import Parents from "./Pages/Parents";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />

        <Route path="/dashboard" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/parent" element={<Parents />} />
      </Route>
    </Routes>
  );
}

export default App;
