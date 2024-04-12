import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";

const Index: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<App />} />
    </Routes>
  );
};

export default Index;
