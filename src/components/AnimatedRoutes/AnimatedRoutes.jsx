import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { Discography } from "../../Pages/Discography/Discography";

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence>
    <Routes location={location} key = {location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="discography" element={<Discography />} />
    </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
