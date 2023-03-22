import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import YearsPage from "./Gallery/src/components/YearsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/years" element={<YearsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
