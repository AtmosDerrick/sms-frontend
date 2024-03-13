import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/Signup";

function Account() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="w-3/4 mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Account;
