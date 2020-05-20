import React from "react";
import NavBar from "./components/NavBar";
import Table from "./components/FilterTable";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Table />
    </div>
  );
}
