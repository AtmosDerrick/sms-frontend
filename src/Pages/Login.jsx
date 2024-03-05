import React, { useState } from "react";
import logo from "../assets/img/logo new gen.jpg";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");

    // Add your sign-in logic here
    if (username === "your_username" && password === "your_password") {
      setError("");
      console.log("Sign in successful");
      // Redirect or perform other actions upon successful sign-in
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex justify-between items-center bg-white">
      <div className="w-full relative side h-screen">
        <div className="absolute w-full h-full z-20 ">
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <div className="w-full flex justify-center mb-8">
                <img src={logo} alt="logo" className="w-32 h-32 rounded-full" />
              </div>
              <h2 className="text-2xl font-semibold text-white uppercase">
                New Generation School Int.
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-black opacity-70"></div>
      </div>
      <div className="w-full mx-auto para ">
        <div className="w-3/4 mx-auto h-[25rem]   rounded-2xl ">
          <div>
            <h5 className="text-center text-lg text-primary font-semibold">
              Login{" "}
            </h5>
          </div>
          <form onSubmit={handleSignIn} className=" w-5/6 mx-auto mt-8">
            <div className="mb-4">
              <div className="mb-2 text-white">
                <label htmlFor="username">Username:</label>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-[2px] border-blue-500 rounded-2xl h-12 p-2 bg-white shadow-md"
              />
            </div>
            <div>
              <div className="mb-4 text-white">
                <label htmlFor="password">Password:</label>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-[2px] border-blue-500 rounded-2xl h-12 p-2 bg-white shadow-md"
              />
            </div>

            <div className="flex justify-end text-xs mt-4 text-gray-500">
              <h3>Forgot Password?</h3>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-blue-500 w-full mt-8 py-3 rounded-2xl text-white">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
