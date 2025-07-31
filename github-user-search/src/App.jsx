// src/App.jsx
import React from "react";
import Search from "./components/Search"; // make sure this path matches your folder structure

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center mt-4">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;

