import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const UseContext = createContext(null);

function Context() {
  const [username, setUsername] = useState("");

  return (
    <div className="divPadding">
      <h1>UseContext Username</h1>
      <UseContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
      </UseContext.Provider>
    </div>
  );
}

export default Context;
