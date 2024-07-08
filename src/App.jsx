import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import { About, Calculating, Home, Team, Map } from "./pages";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-7FWD6TWSPG"; // your Measurement ID

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Landing Page",
    });
  }, []);

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
