import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Error from "./pages/Error/Error";
import Person from "./pages/Person/Person";
import { ErrorBoundary } from "./components/Navbar/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:personId" element={<Person />} />
          </Route>
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
