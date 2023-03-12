import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-full">
        <div>
          <Navbar />
        </div>
        <Home />
      </div>
    </>
  );
};

export default App;
