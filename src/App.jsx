import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => waitFor(3000).then(() => import("./pages/Home")));
import YearsPage from "./Gallery/components/YearsPage";
import Preloader from "./features/preloader/Preloader";

const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/years" element={<YearsPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

function waitFor(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default App;
