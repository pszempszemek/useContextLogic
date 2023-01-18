import React, { useState, useContext } from "react";
import Component1 from "./components/Component1";
import { NameContext } from "./NameContext";


export default function App() {
  const [name, setName] = useState('Andrzej')

  return (
    <NameContext.Provider value={{name, setName}}>
      <main>
          <h1>hello {name}</h1>
          <Component1 />
      </main>
    </NameContext.Provider>
  );
}
