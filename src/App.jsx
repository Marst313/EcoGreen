import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import { About, Calculating, Home, Team, Map } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
