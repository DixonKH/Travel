import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Dima");
  return (
    <div className="box">
      <h2>Component A</h2>
      <p>Hello {user}</p>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
