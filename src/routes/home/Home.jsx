import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div className="Home">
      <Categories />
    </div>
  );
};
export default Home;
