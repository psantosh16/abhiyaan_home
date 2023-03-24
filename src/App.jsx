import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => waitFor(5000).then(() => import("./pages/Home")));
const YearsPage = React.lazy(() => import("./Gallery/components/YearsPage"));
const Preloader = React.lazy(() => import("./features/preloader/Preloader"));

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
