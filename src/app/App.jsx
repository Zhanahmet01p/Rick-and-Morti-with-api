import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Character from "../pages/character/character";
import Locations from "../pages/locations/locations";
import Episodes from "../pages/episodes/episodes";
import Header from "./layouts/header";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/character" element={<Character />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
