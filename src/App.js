import React, { useState, useEffect } from "react";
import Logo from "./Assets/vhgb.png";
import GLogo from "./Assets/google.svg";
import { auth, provider, onAuthStateChanged } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const handleButtonClick = () => {
    setShowUserForm(!showUserForm);
  };
  const handleLogout = () => {
    setUser(null); // Clear the user data to log out
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {user ? (
        <Router>
          <div>
            <Navbar
              user1={user}
              onLogout={handleLogout}
              showUserForm={showUserForm}
              btnclick={handleButtonClick}
            />
            <Routes>
              <Route path="/" element={<UserTable />} />
              <Route
                path="/userform"
                element={<UserForm email={user?.email} />}
              />
            </Routes>
          </div>
        </Router>
      ) : (
        <>
          <nav className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
              <a className="flex items-center">
                <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-300 underline decoration-red-500">
                  Codify
                </span>
              </a>
            </div>
          </nav>
          <div className="flex justify-center items-center h-screen">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleGoogleSignIn}
            >
              <div className="flex text-red-600">
                <img className="w-8 h-8 pr-2" src={GLogo} />
                Sign In with Google
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
