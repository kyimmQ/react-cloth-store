import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation-bar/Navigation";
import Auth from "./routes/authen/Authentication";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<p>Shop</p>} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
