import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./components/navigation-bar/Navigation";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="" element={<Home />} />
          <Route path="shop" element={<p>Shop</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
