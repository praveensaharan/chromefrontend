import React, { useState, useEffect } from "react";
import Python from "../Assets/python.svg";
import CPP from "../Assets/cpp.svg";
import Java from "../Assets/java-original.svg";
import JSW from "../Assets/javascript-js.svg";
import Copy from "../Assets/copy-line-icon.svg";
import Code from "../Assets/code.svg";

function UserTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://chromexbackend-zqgj.vercel.app/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const calculateDaysPassed = (date) => {
    const currentDate = new Date();
    const pastDate = new Date(date);
    const timeDifference = currentDate.getTime() - pastDate.getTime();
    const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysPassed < 1) {
      const hoursPassed = Math.floor(timeDifference / (1000 * 3600));
      return hoursPassed + " hours";
    }

    return daysPassed + " days";
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <ul className="w-full divide-y divide-gray-200 bg-black">
        {users.map((user) => (
          <li className="pb-5 pt-2 h-24  hover:bg-slate-900" key={user._id}>
            <div className="flex items-center text-white space-x-2">
              <div className="flex-shrink-0 pl-1">
                {user.language === "python" && (
                  <img
                    className="w-6 h-6 rounded-full"
                    src={Python}
                    alt="Neil image"
                  />
                )}
                {user.language === "java" && (
                  <img
                    className="w-6 h-6 rounded-full"
                    src={Java}
                    alt="Neil image"
                  />
                )}
                {user.language === "c++" && (
                  <img
                    className="w-6 h-6 rounded-full"
                    src={CPP}
                    alt="Neil image"
                  />
                )}
                {user.language !== "python" &&
                  user.language !== "java" &&
                  user.language !== "c++" && (
                    <img
                      className="w-6 h-6 rounded"
                      src={JSW}
                      alt="Neil image"
                    />
                  )}
              </div>

              <div className="flex-1 w-24">
                <p className="capitalize text-base font-medium text-white truncate">
                  {user.name}
                </p>
              </div>
              <div className="flex w-24">
                <p className="uppercase text-sm font-medium text-white truncate">
                  {user.topic}
                </p>
              </div>
              <div className="flex-1 w-24">
                <p className="text-sm font-medium text-white truncate">
                  {calculateDaysPassed(user.date)}
                </p>
                <p className="text-xs text-gray-300 truncate">
                  by: {user.email}
                </p>
              </div>
              <div className="flex w-6">
                <button onClick={() => handleCopyCode(user.code)}>
                  <img
                    className="w-6 h-6 rounded-md"
                    src={Copy}
                    alt="Neil image"
                  />
                </button>
              </div>
              <div className="flex min-w-0">
                <button onClick={() => (window.location.href = user.link)}>
                  <img
                    className="w-6 h-6 rounded-full"
                    src={Code}
                    alt="Neil image"
                  />
                </button>
              </div>
            </div>

            <div
              className="flex pl-1 pt-3 w-[90%] text-xs text-gray-300"
              style={{
                width: "400px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              → {user.description}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserTable;
