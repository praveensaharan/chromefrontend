import React, { useState } from "react";
import GLogo from "../Assets/google.svg";

function UserForm({ email }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(name, description, link, topic, language, code);
    setName("");
    setDescription("");
    setLink("");
    setTopic("");
    setLanguage("");
    setCode("");
  };

  const onSubmit = async (
    name,
    description,
    link,
    topic,
    language,
    code,
    userEmail = email
  ) => {
    try {
      const response = await fetch(
        "https://chromexbackend-zqgj.vercel.app/register",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            description,
            link,
            topic,
            language,
            code,
            email: userEmail,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.warn(data);
      if (response.ok) {
        alert("Data saved successfully");
        fetchUsers();
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const fetchUsers = () => {
    // Implement the fetchUsers function to fetch user data
  };

  return (
    <form className="myForm w-[4/5]" onSubmit={handleOnSubmit}>
      <input
        className="border-2 border-red-300 bg-white h-10 mb-1 mr-2 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-red-500"
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        className="border-2 w-[40%] border-red-300 bg-white h-10 mb-1 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-red-500"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      >
        <option value="">Select Topic</option>
        <option value="array">Array</option>
        <option value="queue">Queue</option>
        <option value="stack">Stack</option>
        <option value="linkedlist">Linked list</option>
        <option value="hashmap">Hash Map</option>
        <option value="tree">Tree</option>
        <option value="graph">Graph</option>
      </select>

      <select
        className="border-2 w-[40%] border-red-300 bg-white h-10 mb-1 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-red-500"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        required
      >
        <option value="">Select Language</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="c++">C++</option>
        <option value="javascript">JavaScript</option>
      </select>
      <input
        className="border-2 w-[70%] border-red-300 bg-white h-10 mb-1 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-red-500"
        type="text"
        placeholder="Description (25 words)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="border-2 w-[70%] border-red-300 bg-white h-10 mb-1 pr-5 pl-3 rounded-lg text-sm focus:outline-none hover:bg-slate-200 hover:border-red-500"
        type="text"
        placeholder="Link (Github,Website)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <textarea
        className="resize-none mt-2 mb-5 border-2 border-red-300 border-solid rounded-lg"
        placeholder="#paste your code here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
        style={{
          background: "url(http://i.imgur.com/2cOaJ.png) no-repeat",
          backgroundAttachment: "local",
          backgroundColor: "white",
          height: "100px",
          maxHeight: "150px",
          overflow: "auto",
          width: "90%",
          padding: "10px",
          paddingLeft: "35px",
          paddingTop: "10px",
        }}
      ></textarea>

      <button
        className="bg-gray-900 hover:bg-gray-700 text-red-300 font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default UserForm;
