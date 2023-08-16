import React from "react";
import { useState } from "react";
import Add from "../Assets/file-plus.svg";
import Logo from "../Assets/vhgb.png";
import Table from "../Assets/table.png";
import Login from "../Assets/log-in.svg";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const button1Click = () => {
    props.btnclick();
  };
  const handleLogout = () => {
    props.onLogout(); // Call the logout function from the parent component
  };

  return (
    <>
      <nav className="border-gray-200 divide-y divide-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-300 underline decoration-red-500">
              Codify
            </span>
          </a>
          <div className="flex items-center flex-grow justify-center">
            <div className="relative">
              <input
                className="w-28 border-2 border-red-300 bg-white h-10 pr-2 pl-2 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-red-500"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-2 mt-1 mr-4"
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          {props.showUserForm ? (
            <Link to="/userform">
              <button onClick={button1Click}>
                <div className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-800 rounded-full ml-3 focus:ring-4 focus:ring-gray-600">
                  <img className="w-6 h-6" src={Add} alt="Show Table" />
                </div>
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button onClick={button1Click}>
                <div className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-800 rounded-full ml-3 focus:ring-4 focus:ring-gray-600">
                  <img className="w-6 h-6" src={Table} alt="Add Code" />
                </div>
              </button>
            </Link>
          )}

          <div className="relative inline-block text-left">
            <button
              id="dropdownDefaultButton"
              className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-800 rounded-full ml-3 focus:ring-4 focus:ring-gray-600"
              type="button"
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={props.user1.photoURL}
                alt="user photo"
                title={props.user1.email}
              />
            </button>
            {isOpen && (
              <div
                id="dropdown"
                className="z-10 absolute bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-28"
              >
                <ul
                  className="py-2 text-sm text-gray-200 h-24 text-ellipsis overflow-hidden"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      {props.user1.displayName}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-1 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      {props.user1.email}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-800 rounded-full ml-3 focus:ring-4 focus:ring-gray-600"
            id="user-menu-button"
            onClick={handleLogout}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-6 h-6 rounded-full"
              src={Login}
              alt="Logout"
              title="Logout"
            />
          </button>
        </div>
      </nav>
      <ul className="w-full bg-black">
        <li style={{ borderTop: "2px solid white" }}></li>
      </ul>
    </>
  );
}

export default Navbar;
