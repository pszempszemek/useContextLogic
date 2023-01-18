import React, { useState, createContext } from "react";
import Component1 from "./components/Component1";

// bez sensu takiego jednolinijkowca exportować do osobnego pliku
export const NameContext = createContext("Starting name");

export default function App() {
  const [name, setName] = useState("Andrzej");

  return (
    <NameContext.Provider value={{ name, setName }}>
      <main>
        <h1>hello {name}</h1>
        <Component1 />
      </main>
    </NameContext.Provider>
  );
}
