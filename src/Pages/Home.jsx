import React from "react";
import SideBar from "../components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import Student from "./Student";

function Home() {
  return (
    <div className="w-full flex justify-start">
      <SideBar page="dashboard" />
      <div className="w-full ">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
